import { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// MUI Imports
import {
  Paper,
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import ChatIcon from '@mui/icons-material/Chat';
// Internal Imports
import { useFetch } from '../Utils/useFetch';
import Loader from '../Utils/Loader';
import Enso from '../Images/EnsoTransparent.png';
// Context Imports
import { ChatContext } from '../Context/chatContext';
// Interface Imports
import { ChatroomUser } from '../Interfaces/interfaces';

interface Props {}

const CustomizedPaper = styled(Paper)`
  border-radius: 15px;
  box-shadow: 2px 2px 4px 4px #c3d3d1;
  margin: 15px;
  margin-top: 10%;
  padding: 20px;
`;

const useStyles = makeStyles({
  userSearchWindow: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '15px',
  },
  innerBox: {
    marginTop: '3%',
  },
  boxUser: {
    maxWidth: '100%',
    border: '2px solid #c3d3d1',
    borderRadius: '30px',
    padding: '5%',
  },
  avatarRow: {
    display: 'flex',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameRow: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-around',
    justifyContent: 'space-between',
  },
  btn: {},
});

const UserSearch: FC<Props> = () => {
  const classes = useStyles();
  let history = useHistory();
  const { createChat } = useContext(ChatContext);

  // Fetch All Users
  const { isLoading, apiData } = useFetch(
    'get',
    'http://localhost:5000/api/users/allUsers'
  );

  if (apiData) {
    console.log(apiData);
  }

  const onClickHandlerProfile = async (event: any) => {
    console.log(event.target.id);

    history.push(`/otherProfile/${event.target.id}`);
  };

  const onClickHandlerChat = async (event: any) => {
    console.log(event.target.id);
    const receiverName: string = event.target.id;
    const userReceiver: ChatroomUser[] = apiData.users.filter(
      (user: ChatroomUser) => user.artistName === receiverName
    );

    console.log(userReceiver[0]);
    await createChat(userReceiver[0]);

    history.push(`/chatroom/${userReceiver[0]._id}`);
  };

  return (
    <div className={classes.userSearchWindow}>
      {isLoading && <Loader />}

      <CustomizedPaper>
        <Box>
          <Typography
            sx={{ textAlign: 'center' }}
            color="secondary"
            variant="h4"
          >
            User Search
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 5,
              mt: 2,
            }}
          >
            <hr className="beautyHr" />
          </Box>
          <ul>
            {apiData?.users &&
              apiData.users.map((user: ChatroomUser) => (
                <li key={user._id} className={classes.innerBox}>
                  <Box sx={{ display: 'flex' }} className={classes.boxUser}>
                    <Box className={classes.avatarRow}>
                      <Avatar
                        src={user.profileImage ? user.profileImage : Enso}
                      />
                    </Box>
                    <Box sx={{ ml: 2 }} className={classes.nameRow}>
                      <Typography variant="h6">{user.artistName}</Typography>
                    </Box>
                    <div className={classes.iconRow}>
                      <Button
                        className={classes.btn}
                        id={user._id}
                        onClick={onClickHandlerProfile}
                        variant="outlined"
                        color="secondary"
                      >
                        Profile
                      </Button>
                      <Button
                        className={classes.btn}
                        id={user.artistName}
                        onClick={onClickHandlerChat}
                        variant="outlined"
                        color="secondary"
                      >
                        Chat
                      </Button>
                    </div>
                  </Box>
                </li>
              ))}
          </ul>
        </Box>
      </CustomizedPaper>
    </div>
  );
};

export default UserSearch;
