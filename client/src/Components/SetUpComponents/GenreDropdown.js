import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const GenreDropdown = ({ hobbyInput, setHobbyInput }) => {
  const [open, setOpen] = useState(false);

  // console.log(genre);

  const handleChange = (event) => {
    console.log(event);
    setHobbyInput({
      ...hobbyInput,
      [event.target.name]: event.target.value,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Choose your Hobby Genre</Button>
      <FormControl sx={{ minWidth: "70%" }}>
        <InputLabel>Genre</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={hobbyInput.genre}
          name="genre"
          label="genre"
          onChange={handleChange}
        >
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Photography"}>Photography</MenuItem>
          <MenuItem value={"Dancing"}>Dancing</MenuItem>
          <MenuItem value={"Sports"}>Sports</MenuItem>
          <MenuItem value={"Painting"}>Painting</MenuItem>
          <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default GenreDropdown;
