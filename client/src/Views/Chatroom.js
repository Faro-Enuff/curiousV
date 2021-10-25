import React, { useState, useEffect, useContext, useRef } from "react";
// Socket.IO
import io from "socket.io-client";
// MUI Core Imports
import { TextField, Box, Button, Typography } from "@mui/material";
import { useFetch } from "../Utils/useFetch";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import SendIcon from "@mui/icons-material/Send";

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
    marginBottom: "5%",
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
    marginTop: "5%",
    marginBottom: "1%",
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
}));

const Chatroom = () => {
  const classes = useStyles();

  // Get Profile Data of loggedIn User
  const {
    isLoading,
    apiData: profile,
    serverError,
  } = useFetch("get", "http://localhost:5000/api/users/profile");

  // Params ArtistName
  const { receiverName } = useParams();

  console.log(receiverName);

  // Make the scroll from bottom to top
  const dummy = useRef(null);
  const scrollToBottom = () => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  });

  const { apiData: chatroomData } = useFetch(
    "get",
    `http://localhost:5000/api/chatrooms/${receiverName}`
  );

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  console.log(chatroomData?.chatroom[0]._id);

  const room = chatroomData?.chatroom[0]._id;

  const joinRoom = () => {
    if (room) {
      console.log("Join Room");
      socket.emit("join_room", room);
    }
  };
  useEffect(() => {
    joinRoom();
    console.log("hey");
  }, [chatroomData]);

  const sendMessage = async () => {
    // Here we need to check if the chatroom with this userId exists
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: profile?.user.artistName,
        message: currentMessage,
        time: Date.now(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      console.log(data);
    });
  }, [socket]);

  return (
    <div className={classes.chatroom}>
      <div className={classes.chatHeader}>
        <Box sx={{ pt: 1, pb: 1 }}>
          <h2>{`Private chat with ${receiverName}`}</h2>
        </Box>
      </div>
      <div className={classes.chatFrame}>
        <div className={classes.chatBody}>
          {messageList.map((messageContent, key) => {
            return (
              <Box
                sx={{ borderRadius: 2, boxShadow: 2, mb: "10%", pl: 1 }}
                className={classes.bodyContent}
                key={key}
                id={
                  messageContent.author === receiverName ? "Receiver" : "Sender"
                }
              >
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
