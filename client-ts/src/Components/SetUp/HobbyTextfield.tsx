import React, { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
// MUI Core Imports
import { FormControl, TextField } from '@mui/material';
// Interface Imports
import { hobbyPostInput } from '../../Interfaces/interfaces';

interface Props {
  hobbyPostInput: hobbyPostInput;
  setHobbyPostInput: Dispatch<SetStateAction<hobbyPostInput>>;
}

const HobbyTextfield: FC<Props> = ({ hobbyPostInput, setHobbyPostInput }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHobbyPostInput({
      ...hobbyPostInput,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <FormControl>
      <TextField
        helperText=" "
        value={hobbyPostInput.hobby}
        onChange={handleOnChange}
        name="hobby"
        label="Hobby"
      />
    </FormControl>
  );
};

export default HobbyTextfield;
