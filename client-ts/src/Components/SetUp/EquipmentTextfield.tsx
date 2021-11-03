import React, { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
// MUI Core Imports
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
// Interface Imports
import { hobbyPostInput } from '../../Interfaces/interfaces';

interface Props {
  input: hobbyPostInput;
  setInput: Dispatch<SetStateAction<hobbyPostInput>>;
}

const EquipmentTextfield: FC<Props> = ({ input, setInput }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl>
      <TextField
        helperText="Please enter a short description of your current equipment"
        multiline
        maxRows={4}
        name="equipment"
        value={input.equipment}
        onChange={handleOnChange}
        label="e.g. Gibson SG Standard HC"
      />
    </FormControl>
  );
};

export default EquipmentTextfield;
