// MUI Core Imports
import { FormControl, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const EquipmentTextfield = ({ hobbyInput, setHobbyInput }) => {
  const handleOnChange = (event) => {
    setHobbyInput({ ...hobbyInput, [event.target.name]: event.target.value });
  };

  //   console.log(value);

  return (
    <FormControl>
      <TextField
        helperText="Please enter a short description of your current equipment"
        multiline
        id=""
        maxRows={4}
        name="equipment"
        value={hobbyInput.equipment}
        onChange={handleOnChange}
        id="filled-multiline-flexible"
        label="e.g. Gibson SG Standard HC"
      />
    </FormControl>
  );
};

export default EquipmentTextfield;
