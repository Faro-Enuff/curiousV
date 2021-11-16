import React, {
  FC,
  ChangeEvent,
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
// NPM Imports
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { formatDistance } from 'date-fns';
// MUI Core Imports
import { TextField, Box, Button, Typography, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@mui/icons-material/Send';
// Context Imports
import { ChatContext } from '../Context/chatContext';
// Internal Imports
import { useFetch } from '../Utils/useFetch';
import Enso from '../Images/Enso.png';
import Loader from '../Utils/Loader';
// Interface Imports
import { CurrentMessage, ChatroomUser } from '../Interfaces/interfaces';

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// !!! Connect Socket.IO to Back-End !!!
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
const socket = io('http://localhost:3001');

const useStyles = makeStyles((muiTheme) => ({
  chatroom: {
    width: '95%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    marginTop: '15%',
    marginBottom: '26%',
  },
  chatHeader: {
    position: 'fixed',
    top: '8%',
  },
  chatFrame: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  chatFooter: {
    position: 'fixed',
    width: '80%',
    paddingLeft: '5%',
    bottom: '14%',
  },
  chatBody: {
    '& #Sender': {
      backgroundColor: '#b7cac8',
      marginRight: '50%',
    },
    '& #Receiver': {
      backgroundColor: '#b7cac8',
      marginLeft: '50%',
    },
  },
  bodyContent: {},
  chatTextArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonDiv: {},
  btn: {},
}));

const Chatroom: FC = () => {
  const classes = useStyles();

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Style -Make the scroll from bottom to top !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const dummy = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      dummy.current?.scrollIntoView({ behavior: 'smooth' });
    };
    scrollToBottom();
  });

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Fetch -  Profile Data of loggedIn User !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // Sender
  const { apiData: profile } = useFetch(
    'get',
    'http://localhost:5000/api/users/profile'
  );

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Params - Grab Receiver ArtistName URL !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const { receiverId } = useParams<{ receiverId?: string }>();

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Chat Context for saving messages in DB !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const { saveMessage } = useContext(ChatContext);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Fetch -  Chatroom Data !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const { apiData: chatroomData, isLoading: chatLoader } = useFetch(
    'get',
    `http://localhost:5000/api/chatrooms/${receiverId}`
  );
  console.log(receiverId);
  console.log(chatroomData);
  // console.log(chatroomData?.chatroom[0].messages);

  // Receiver
  const [receiver, setReceiver] = useState<ChatroomUser>({
    _id: '',
    artistName: '',
    profileImage: '',
    chatroomIds: [],
  });

  const filteredUser: any = chatroomData?.chatroom[0].artistNames.filter(
    (artist: any) => artist._id === receiverId
  )[0];

  useEffect(() => {
    setReceiver({
      _id: filteredUser?._id,
      artistName: filteredUser?.artistName,
      profileImage: filteredUser?.profileImage
        ? filteredUser?.profileImage
        : Enso,
      chatroomIds: filteredUser?.chatroomIds,
    });
  }, [filteredUser]);
  console.log(filteredUser);
  console.log(receiver);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Socket.IO -  Join Room !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  // Call join room function
  useEffect(() => {
    // Grab Room ID of Chatroom Fetch to have an unique identifier
    const room: string = chatroomData?.chatroom[0]._id;
    // console.log(chatroomData?.chatroom[0]._id);
    const joinRoom = () => {
      if (room) {
        console.log('Join Room');
        socket.emit('join_room', room);
      }
    };
    joinRoom();
    console.log('Joined room :>>');
  }, [chatroomData]);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Socket.IO -  Send Messages !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  // Use States for Messages / Message List

  const [currentMessage, setCurrentMessage] = useState<string>('');

  const [messageList, setMessageList] = useState<CurrentMessage[]>([]);

  useEffect(() => {
    const chatroom = chatroomData?.chatroom[0];
    setMessageList(chatroom?.messages);
  }, [chatLoader]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  // Send Message Function

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData: CurrentMessage = {
        room: chatroomData?.chatroom[0]._id,
        author: profile?.user.artistName,
        message: currentMessage,
        time: Date.now(),
      };

      // Socket.IO Emit function to the Back-End
      await socket.emit('send_message', messageData);

      // set use State
      setMessageList((list) => [...list, messageData]);
      // Reset Current Message
      setCurrentMessage('');
      // Send Message to Back-End
      saveMessage(messageData);
    }
  };

  // Listen to messages -

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
      // console.log(data);
    });
  }, [socket]);

  return (
    <div className={classes.chatroom}>
      {chatLoader && <Loader />}
      <div className={classes.chatHeader}>
        <Box sx={{ pt: 1, pb: 1 }}>
          <h2>{`Private chat with ${receiver.artistName}`}</h2>
        </Box>
      </div>
      <div className={classes.chatFrame}>
        <div className={classes.chatBody}>
          {messageList &&
            messageList.map((messageContent, key) => {
              return (
                key >= 1 && (
                  <Box
                    sx={{ borderRadius: 7, boxShadow: 15, mb: '10%', p: 2 }}
                    className={classes.bodyContent}
                    key={key}
                    id={
                      messageContent.author === receiver.artistName
                        ? 'Receiver'
                        : 'Sender'
                    }
                  >
                    <Avatar
                      src={
                        messageContent.author === receiver.artistName
                          ? receiver.profileImage
                          : profile?.user.profileImage
                          ? profile?.user.profileImage
                          : Enso
                      }
                    />
                    <Typography variant="h6">
                      {messageContent.message}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="subtitle2">
                        {messageContent.author}
                      </Typography>
                      <Typography variant="subtitle2" sx={{}}>
                        {formatDistance(messageContent.time, new Date(), {
                          addSuffix: true,
                        })}
                      </Typography>
                    </Box>
                  </Box>
                )
              );
            })}
          <div ref={dummy} />
        </div>
      </div>
      <div className={classes.chatFooter}>
        <div className={classes.chatTextArea}>
          <div>
            <TextField
              id="standard-multiline-static"
              multiline
              maxRows={3}
              value={currentMessage}
              onChange={handleChange}
            />
          </div>
          <div className={classes.buttonDiv}>
            <Button
              className={classes.btn}
              size="small"
              variant="contained"
              onClick={sendMessage}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
