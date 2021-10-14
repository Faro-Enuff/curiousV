import React, { useState } from "react";

// MUI Imports
import { Box, TextField, Button } from "@mui/material";

// MUI LAB Imports
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";

const DateRangePicker = ({ title, input, setInput }) => {
  // Create a better Way to get it reusable at this part

  const handleOnChange = (event) => {
    console.log(event);
    setInput({
      ...input,
      ["timeFrame"]: event,
      ["startDate"]: event[0],
      ["endDate"]: event[1],
    });
  };

  return (
    <div>
      <Button>{title}</Button>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateRangePicker
          startText="Start"
          value={input.timeFrame}
          name="date"
          onChange={handleOnChange}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
export default DateRangePicker;
