import React, { useState, useEffect, useContext, useRef } from "react";

// NPM Imports
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import moment from "moment";

// MUI Core Imports
import { TextField, Box, Button, Typography, Avatar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";

// Context Imports
import { ChatContext } from "../Context/chatContext";

// Internal Imports
import { useFetch } from "../Utils/useFetch";
import Enso from "../Images/Enso.png";
import Loader from "../Utils/Loader";

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// !!! Connect Socket.IO to Back-End !!!
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
const socket = io.connect("http://localhost:3001");

const useStyles = makeStyles((muiTheme) => ({
  chatroom: {
    bottom: 0,
  },
  chatHeader: {
    top: 0,
    marginLeft: "5%",
    marginRight: "5%",
  },
  chatFrame: {
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "3%",
    position: "fixed",
    top: "15%",
    bottom: "15%",
    width: "90%",
    overflow: "hidden",
    overflowY: "auto",
  },
  chatFooter: {
    width: "100%",
    position: "fixed",
    bottom: "6.9%",
    backgroundColor: "lightgrey",
  },
  chatBody: {
    display: "flex",
    flexDirection: "column",
    "& #Sender": {
      backgroundColor: muiTheme.palette.primary.main,
      marginRight: "50%",
    },
    "& #Receiver": {
      backgroundColor: muiTheme.palette.secondary.main,
      marginLeft: "50%",
    },
  },
  bodyContent: {
    display: "flex",
    flexDirection: "column",
  },
  chatTextArea: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "3%",
    marginBottom: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  btn: {
    borderRadius: "50%",
  },
}));

const Chatroom = () => {
  const classes = useStyles();

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Style -Make the scroll from bottom to top !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const dummy = useRef(null);
  const scrollToBottom = () => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  });

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Fetch -  Profile Data of loggedIn User !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  const {
    isLoading,
    apiData: profile,
    serverError,
  } = useFetch("get", "http://localhost:5000/api/users/profile");

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Params - Grab Receiver ArtistName URL !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  const { receiverName } = useParams();

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
    "get",
    `http://localhost:5000/api/chatrooms/${receiverName}`
  );

  // console.log(chatroomData?.chatroom[0].messages);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Socket.IO -  Join Room !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  // Grab Room ID of Chatroom Fetch to have an unique identifier
  const room = chatroomData?.chatroom[0]._id;
  // console.log(chatroomData?.chatroom[0]._id);

  const joinRoom = () => {
    if (room) {
      console.log("Join Room");
      socket.emit("join_room", room);
    }
  };

  // Call join room function
  useEffect(() => {
    joinRoom();
    console.log("Joined room :>>");
  }, [chatroomData]);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // !!! Socket.IO -  Send Messages !!!
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  // Use States for Messages / Message List

  const [currentMessage, setCurrentMessage] = useState("");

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setMessageList(chatroomData?.chatroom[0].messages);
  }, [chatLoader]);

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  // Send Message Function

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: profile?.user.artistName,
        message: currentMessage,
        time: Date.now(),
      };

      // Socket.IO Emit function to the Back-End
      await socket.emit("send_message", messageData);

      // set use State
      setMessageList((list) => [...list, messageData]);
      // Reset the TextField
      setCurrentMessage("");
      // Send Message to Back-End
      saveMessage(messageData);
    }
  };

  // Listen to messages -

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      // console.log(data);
    });
  }, [socket]);

  return (
    <div className={classes.chatroom}>
      {chatLoader && <Loader />}
      <div className={classes.chatHeader}>
        <Box sx={{ pt: 1, pb: 1 }}>
          <h2>{`Private chat with ${receiverName}`}</h2>
        </Box>
      </div>
      <div className={classes.chatFrame}>
        <div className={classes.chatBody}>
          {messageList &&
            messageList.map((messageContent, key) => {
              return (
                <Box
                  sx={{ borderRadius: 2, boxShadow: 2, mb: "10%", p: 1 }}
                  className={classes.bodyContent}
                  key={key}
                  id={
                    messageContent.author === receiverName
                      ? "Receiver"
                      : "Sender"
                  }
                >
                  <Avatar
                    src={
                      profile?.user.profileImage
                        ? profile?.user.profileImage
                        : Enso
                    }
                  />
                  <Typography variant="h6">{messageContent.message}</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="subtitle2">
                      {messageContent.author}
                    </Typography>
                    <Typography variant="subtitle2" sx={{}}>
                      {moment(messageContent.time).fromNow()}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          <div ref={dummy} />
        </div>
      </div>
      <div className={classes.chatFooter}>
        <div className={classes.chatTextArea}>
          <div className={classes.chatTextFieldDiv}>
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
