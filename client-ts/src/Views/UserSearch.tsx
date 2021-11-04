import { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// MUI Imports
import { Box, Avatar, Typography } from '@mui/material';
// Internal Imports
import { useFetch } from '../Utils/useFetch';
import Loader from '../Utils/Loader';
// Context Imports
import { ChatContext } from '../Context/chatContext';
// Interface Imports
import { ChatroomUser } from '../Interfaces/interfaces';
interface Props {}

const UserSearch: FC<Props> = () => {
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
    <div>
      {isLoading && <Loader />}
      <Box sx={{ mt: 8 }} className="userSearch">
        <Box sx={{ ml: 4 }}>
          <Typography variant="h4">User Search: </Typography>
        </Box>
        <ul>
          {apiData?.users &&
            apiData.users.map((user: ChatroomUser) => (
              <li key={user._id}>
                <Box sx={{ display: 'flex', mt: 3, mb: 3 }}>
                  <Box sx={{ mr: 2 }}>
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
    </div>
  );
};

export default UserSearch;
