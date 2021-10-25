import { useContext } from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AuthContext } from "../Context/authContext";
import { useFetch } from "../Utils/useFetch";
import { ChatContext } from "../Context/chatContext";
import { useHistory } from "react-router-dom";
import Loader from "../Utils/Loader";

const UserSearch = () => {
  let history = useHistory();
  const { createChat } = useContext(ChatContext);

  // Fetch All Users
  const { isLoading, apiData, serverError } = useFetch(
    "get",
    "http://localhost:5000/api/users/allUsers"
  );

  if (apiData) {
    console.log(apiData);
  }
  //

  const onClickHandler = async (event) => {
    console.log(event.target.id);
    const receiverName = event.target.id;
    const userReceiver = apiData.users.filter(
      (user) => user.artistName === receiverName
    );

    await createChat(userReceiver);

    history.push(`/chatRoom/${receiverName}`);
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
            apiData?.users.map((user) => (
              <li key={user._id}>
                <Box sx={{ display: "flex", mt: 3, mb: 3 }}>
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
