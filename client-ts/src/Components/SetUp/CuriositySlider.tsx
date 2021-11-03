import React, { FC, SetStateAction, Dispatch } from 'react';
// MUI Core
import { Button, Box, FormControl, Slider } from '@mui/material';
// Interface Imports
import { hobbyPostInput } from '../../Interfaces/interfaces';

interface Props {
  input: hobbyPostInput;
  setInput: Dispatch<SetStateAction<hobbyPostInput>>;
}

const CuriositySlider: FC<Props> = ({ input, setInput }) => {
  const handleChange = (event: any) => {
    console.log(event);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Box>
        <FormControl>
          <Button>Curiosity</Button>
          <Slider
            value={input.curiosity}
            step={1}
            min={0}
            max={5}
            name="curiosity"
            onChange={handleChange}
            valueLabelDisplay="on"
            style={{ minWidth: 200 }}
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default CuriositySlider;
