import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { FormControl } from "@mui/material";

const StartDatepicker = ({ hobbyInput, setHobbyInput }) => {
  const [value, setValue] = useState();

  const handleChange = (newValue) => {
    setHobbyInput({
      ...hobbyInput,
      start: newValue,
    });
  };
  // console.log(value);

  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={["year", "month"]}
          label="Year and Month"
          minDate={new Date("2012-03-01")}
          maxDate={new Date("2023-06-01")}
          value={hobbyInput.start}
          onChange={(newValue) => {
            handleChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default StartDatepicker;
