import React, { FC, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { RegisterUser } from '../../Interfaces/interfaces';

interface Props {
  name: string;
  label: string;
  input: RegisterUser;
  setInput: any;
}

const TextfieldAuth: FC<Props> = ({ name, label, input, setInput }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      autoComplete={name}
      autoFocus
      onChange={handleChange}
      value={(input as any)[name]}
    />
  );
};

export default TextfieldAuth;
