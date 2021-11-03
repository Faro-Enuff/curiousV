import React, { FC, Dispatch, SetStateAction } from 'react';
// MUI Imports
import { FormControl, TextField } from '@mui/material';
// MUI LAB Imports
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// Interface Imports
import { hobbyPostInput } from '../../Interfaces/interfaces';

interface Props {
  input: hobbyPostInput;
  setInput: Dispatch<SetStateAction<hobbyPostInput>>;
}

const StartDatePicker: FC<Props> = ({ input, setInput }) => {
  const handleChange = (newValue: any) => {
    setInput({
      ...input,
      start: newValue,
    });
  };

  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={input.start}
          onChange={(newValue) => {
            handleChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default StartDatePicker;
