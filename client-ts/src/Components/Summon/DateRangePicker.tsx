import React, { FC, Dispatch, SetStateAction } from 'react';
// MUI Imports
import { Box, TextField, Button } from '@mui/material';
// MUI LAB Imports
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
// Interface Imports
import { Summon } from '../../Interfaces/interfaces';

interface Props {
  title: string;
  input: Summon;
  setInput: Dispatch<SetStateAction<Summon>>;
}

const DateRangePicker: FC<Props> = ({ title, input, setInput }) => {
  const handleOnChange = (event: any) => {
    console.log(event);
    setInput({
      ...input,
      [input.timeFrame]: event,
      [input.startDate]: event[0],
      [input.endDate]: event[1],
    });
  };

  return (
    <div>
      <Button>{title}</Button>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDateRangePicker
          startText="Start"
          value={input.timeFrame}
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
