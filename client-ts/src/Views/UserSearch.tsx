import { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// MUI Imports
import { Box, Avatar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import { useFetch } from '../Utils/useFetch';
import Loader from '../Utils/Loader';
// Context Imports
import { ChatContext } from '../Context/chatContext';
// Interface Imports
import { ChatroomUser } from '../Interfaces/interfaces';
import { Paper } from '@mui/material';
interface Props {}

const useStyles = makeStyles({
  searchDiv: {
    width: '90%',
    flexGrow: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5%',
    marginBottom: '5%',
  },
  paperDiv: {},
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

  const onClickHandler = async (event: any) => {
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
    <div className={classes.searchDiv}>
      {isLoading && <Loader />}
      <Box className="userSearch">
        <Paper className={classes.paperDiv}>
          <Box sx={{ ml: 5, pt: 2, pb: 1 }}>
            <Typography variant="h4">User Search: </Typography>
            <ul>
              {apiData?.users &&
                apiData.users.map((user: ChatroomUser) => (
                  <li key={user._id}>
                    <Box sx={{ display: 'flex', mt: 5, mb: 5 }}>
                      <Box>
                        <Avatar src={user.profileImage} />
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant="h6"
                          id={user.artistName}
                          onClick={onClickHandler}
                        >
                          {user.artistName}
                        </Typography>
                      </Box>
                    </Box>
                  </li>
                ))}
            </ul>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default UserSearch;
