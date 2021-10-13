import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

////////////////////////
// Select a title, input as well as a useState to track the Input in the parent component
////////////////////////

const Dropdown = ({ title, value, data, input, setInput }) => {
  const [open, setOpen] = useState(false);

  // console.log(genre);

  const handleChange = (event) => {
    console.log(event.target.name);
    setInput({
      ...input,
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
      <Button onClick={handleOpen}>{title}</Button>
      <FormControl sx={{ minWidth: "70%" }}>
        <InputLabel>{`${
          data[0].charAt(0).toUpperCase() +
          data[0].slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")
        }`}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          name={`${data[0]}`}
          label={`${data[0]}`}
          onChange={handleChange}
        >
          {data.slice(1).map((d, key) => (
            <MenuItem key={key} value={`${d}`}>{`${d}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
