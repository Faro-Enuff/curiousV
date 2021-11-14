import * as React from 'react';
import { FC, Dispatch, SetStateAction } from 'react';
import { Creation } from '../../Interfaces/interfaces';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import EnsoIcon from '../../Utils/SvgIcon';
import EnsoIconFilled from '../../Utils/SvgIcon2';

const labels: { [index: string]: string } = {
  0: 'Useless',
  1: 'Poor',
  2: 'Ok',
  3: 'Good',
  4: 'Excellent',
  5: 'V.',
};

interface Props {
  input: Creation;
  setInput: Dispatch<SetStateAction<Creation>>;
}

const CustomRating: FC<Props> = ({ input, setInput }) => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <Box
        sx={{
          width: 300,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={input.funFactor}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
            setInput({ ...input, funFactor: newValue });
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          icon={<EnsoIconFilled />}
          emptyIcon={<EnsoIcon />}
        />
        {value !== null && (
          <Box sx={{ ml: 3 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    </div>
  );
};

export default CustomRating;
