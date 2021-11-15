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
import { styled } from '@mui/material/styles';
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
            }}
          >
            <hr className="beautyHr" />
          </Box>
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
      </CustomizedPaper>
    </div>
  );
};

export default UserSearch;
