import { useState } from "react";
import { TextField } from "@mui/material";

const TextfieldSend = ({ onClick }) => {
  const [currentMessage, setCurrentMessage] = useState("Send message..");
  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };
  return (
    <div className="textfield">
      <TextField
        id="standard-multiline-static"
        multiline
        rows={2}
        value={currentMessage}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextfieldSend;
