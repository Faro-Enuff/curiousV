import React, { useState } from "react";

// MUI Imports
import { FormControl, TextField, Button } from "@mui/material";

const TextfieldShort = ({ title, value, input, setInput }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOnChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  //   console.log(value);

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <FormControl>
        <TextField
          helperText=" "
          value={input.hobby}
          onClose={handleClose}
          onChange={handleOnChange}
          name={value}
          id="demo-helper-text-aligned-no-helper"
          label={value.charAt(0).toUpperCase()}
        />
      </FormControl>
    </div>
  );
};

export default TextfieldShort;
