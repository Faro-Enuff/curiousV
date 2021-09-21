import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const LevelDropdown = ({ hobbyInput, setHobbyInput }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setHobbyInput({ ...hobbyInput, [event.target.name]: event.target.value });
  };
  // console.log(level);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Choose your Hobby level</Button>
      <FormControl sx={{ minWidth: "70%" }}>
        <InputLabel id="demo-controlled-open-select-label">Level</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={hobbyInput.level}
          label="level"
          name="level"
          onChange={handleChange}
        >
          <MenuItem value={"Beginner"}>Beginner</MenuItem>
          <MenuItem value={"Advanced"}>Advanced</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"Profession"}>Profession</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LevelDropdown;
