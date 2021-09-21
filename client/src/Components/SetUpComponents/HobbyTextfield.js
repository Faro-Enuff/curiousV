// MUI Core Imports
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const HobbyTextfield = ({ hobbyInput, setHobbyInput }) => {
  const [value, setValue] = useState();

  const handleOnChange = (event) => {
    setHobbyInput({ ...hobbyInput, [event.target.name]: event.target.value });
  };

  //   console.log(value);

  return (
    <FormControl>
      <TextField
        helperText=" "
        value={hobbyInput.hobby}
        onChange={handleOnChange}
        name="hobby"
        id="demo-helper-text-aligned-no-helper"
        label="Hobby"
      />
    </FormControl>
  );
};

export default HobbyTextfield;
