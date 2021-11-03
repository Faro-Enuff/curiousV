import { FC, Dispatch, SetStateAction, useState } from 'react';
// MUI Imports
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  SelectChangeEvent,
} from '@mui/material';
// Interface Imports
import { Summon, hobbyPostInput } from '../../Interfaces/interfaces';

interface Props {
  title: string;
  value: string;
  data: string[];
  input: Summon | hobbyPostInput;
  setInput: any;
}

const Dropdown: FC<Props> = ({ title, value, data, input, setInput }) => {
  const [open, setOpen] = useState<boolean>(false);

  // console.log(genre);

  const handleChange = (event: SelectChangeEvent) => {
    // console.log(event.target.name);

    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <FormControl sx={{ minWidth: '70%' }}>
        <InputLabel>{`${
          data[0].charAt(0).toUpperCase() +
          data[0].slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')
        }`}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          name={`${data[0]}`}
          label={`${data[0]}`}
          onChange={handleChange}
        >
          {data.slice(1).map((d, key) => (
            <MenuItem key={key} value={`${d}`}>{`${d}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
