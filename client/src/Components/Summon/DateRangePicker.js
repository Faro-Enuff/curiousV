import React, { useState } from "react";

// MUI Imports
import { Box, TextField, Button } from "@mui/material";

// MUI LAB Imports
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";

const DateRangePicker = ({ title, input, setInput }) => {
  const [value, setValue] = useState([null, null]);

  // Create a better Way to get it reusable at this part

  const handleOnChange = (event) => {
    console.log(event);
    setValue(event);
    setInput({ ...input, ["timeFrame"]: event });
  };
  console.log(value);

  return (
    <div>
      <Button>{title}</Button>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateRangePicker
          startText="Start"
          value={value}
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
