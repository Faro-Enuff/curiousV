import { FC, SetStateAction, Dispatch, ChangeEvent } from 'react';
// MUI Imports
import { FormControl, TextField, Button } from '@mui/material';
// Interface Imports
import { Creation, Summon, hobbyPostInput } from '../../Interfaces/interfaces';

interface Props {
  title: string;
  value: string;
  input: Summon | hobbyPostInput | Creation;
  setInput: any;
}

const TextfieldShort: FC<Props> = ({ title, value, input, setInput }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button>{title}</Button>
      <FormControl>
        <TextField
          helperText=" "
          value={(input as any)[value]}
          onChange={handleOnChange}
          name={value}
          id="demo-helper-text-aligned-no-helper"
          label={
            value.charAt(0).toUpperCase() +
            value.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')
          }
        />
      </FormControl>
    </div>
  );
};

export default TextfieldShort;
