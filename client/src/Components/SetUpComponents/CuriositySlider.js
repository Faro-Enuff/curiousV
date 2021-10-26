import React, { useState } from "react";

// MUI Core
import { Button, Box, FormControl, Slider } from "@mui/material";

const SetUpSlider = ({ hobbyInput, setHobbyInput }) => {
  const handleChange = (event) => {
    console.log(event);
    setHobbyInput({
      ...hobbyInput,
      [event.target.name]: event.target.value,
    });
  };

  // console.log(value);

  return (
    <Box>
      <FormControl>
        <Button>Curiosity</Button>
        <Slider
          value={hobbyInput.curiosity}
          step={1}
          min={0}
          max={5}
          name="curiosity"
          onChange={handleChange}
          valueLabelDisplay="on"
          style={{ minWidth: 200 }}
        />
      </FormControl>
    </Box>
  );
};

export default SetUpSlider;
