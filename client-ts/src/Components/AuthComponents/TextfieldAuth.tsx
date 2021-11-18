import React, { FC, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { RegisterUser } from '../../Interfaces/interfaces';

interface Props {
  name: string;
  label: string;
  input: RegisterUser;
  setInput: any;
  typePassword: boolean;
}

const TextfieldAuth: FC<Props> = ({
  name,
  label,
  input,
  setInput,
  typePassword,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type={typePassword ? 'password' : 'text'}
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
