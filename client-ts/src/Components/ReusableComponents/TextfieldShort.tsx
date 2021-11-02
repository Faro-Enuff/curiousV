import { FC, SetStateAction, Dispatch, useState, ChangeEvent } from 'react';
// MUI Imports
import { FormControl, TextField, Button } from '@mui/material';
// Interface Imports
import { Summon } from '../../Interfaces/interfaces';

interface Props {
  title: string;
  value: string;
  input: Summon;
  setInput: Dispatch<SetStateAction<Summon>>;
}

const TextfieldShort: FC<Props> = ({ title, value, input, setInput }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <FormControl>
        <TextField
          helperText=" "
          value={(input as any)[value]}
          onChange={handleOnChange}
          name="assignmentTitle"
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
