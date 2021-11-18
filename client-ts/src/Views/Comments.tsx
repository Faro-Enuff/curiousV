import React, {
  FC,
  useEffect,
  useRef,
  useState,
  Dispatch,
  useContext,
} from 'react';
import { SummonContext } from '../Context/summonContext';
import { Avatar, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import CommentTextfield from '../Components/Comments/CommentTextfield';
import Enso from '../Images/EnsoTransparent.png';
import io from 'socket.io-client';
import { CurrentComment } from '../Interfaces/interfaces';
import { formatDistance } from 'date-fns';
import { useFetch } from '../Utils/useFetch';
import Loader from '../Utils/Loader';

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// !!! Connect Socket.IO to Back-End !!!
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
const socket = io('http://localhost:3001');

interface Props {
  input: any;
}

const useStyles = makeStyles((muiTheme) => ({
  flexContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    left: 0,
  },
  commentsContainer: {
    position: 'fixed',
    left: 0,
    overflow: 'hidden',
    height: '65%',
    bottom: '10%',
    width: '100%',
    overflowY: 'auto',
  },
  commentElements: {
    display: 'flex',
    flexDirection: 'column',
  },
  comments: {
    margin: '1%',
    padding: '5%',
    borderRadius: '20%',
    height: 'auto',
    backgroundColor: '#b7cac8',
  },
  commentTextfield: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: '5%',
  },
  commentOrder: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'row',
    margin: '5%',
  },
  userAvatar: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5%',
  },
  userComment: {
    width: '100%',
  },
}));

const Comments: FC<Props> = ({ input }) => {
  const classes = useStyles();
  // console.log('Comments : >>', input);

  const { createComment } = useContext(SummonContext);

  const { isLoading: summonsLoading, apiData: summons } = useFetch(
    'get',
    `http://localhost:5000/api/summons/getSummon/${input?._id}`
  );

  const [commentList, setCommentList] = useState<any[]>([]);
  // console.log('Comment List : >>', commentList);
  useEffect(() => {
    setCommentList(summons?.userSummon.comments);
  }, [summons]);

  // Make the scroll from bottom to top
  const dummy = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  });

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Socket.IO -  Join Room !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  // Call join room function
  useEffect(() => {
    // Grab Room ID of Chatroom Fetch to have an unique identifier
    const room: string = input?._id;
    // console.log(chatroomData?.chatroom[0]._id);
    const joinRoom = () => {
      if (room) {
        console.log('Join Room');
        socket.emit('join_room', room);
      }
    };
    joinRoom();
    // console.log('Joined room :>>', room);
  }, [input]);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Socket.IO -  Send Comment !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const sendComment = async (
    currentComment: string,
    setCurrentComment: Dispatch<string>,
    profile: any
  ) => {
    if (currentComment !== '') {
      const commentData: CurrentComment = {
        room: input._id,
        author: profile?.user.artistName,
        comment: currentComment,
        time: Date.now(),
      };

      // Socket.IO Emit function to the Back-End
      await socket.emit('send_comment', commentData);

      // set use State
      // setCommentList((list) => [...list, commentData]);
      // Reset Current Comment
      setCurrentComment('');
      // Send Comment to Back-End -
      createComment(commentData, setCommentList);
    }
  };

  // Listen to Comments
  useEffect(() => {
    socket.on('receive_comment', (data) => {
      setCommentList((list) => [...list, data]);
      // console.log(data);
    });
  }, [socket]);

  return (
    <div className={classes.flexContainer}>
      {summonsLoading && <Loader />}
      <div className={classes.commentsContainer}>
        {commentList?.length >= 1 &&
          commentList.map((comment, key) => {
            return (
              <div className={classes.commentOrder} key={key}>
                <div className={classes.userAvatar}>
                  <Avatar src={comment.userId?.profileImage} />
                </div>
                <div className={classes.userComment}>
                  <Paper className={classes.comments}>
                    <div className={classes.commentElements}>
                      <div>
                        <Typography variant="h6">
                          {comment.message?.author}
                        </Typography>
                        <Typography variant="body2">
                          {formatDistance(comment.message?.time, new Date(), {
                            addSuffix: true,
                          })}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body1">
                          {comment.message?.comment}
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </div>
              </div>
            );
          })}

        <div ref={dummy} />
      </div>
      <div className={classes.commentTextfield}>
        <CommentTextfield sendComment={sendComment} />
      </div>
    </div>
  );
};

export default Comments;
