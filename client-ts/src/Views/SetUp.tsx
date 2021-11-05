import React, { FC, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// Context Import
import { AuthContext } from '../Context/authContext';
// MUI Core Imports
import { Paper, Box, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import CuriositySlider from '../Components/SetUp/CuriositySlider';
import Dropdown from '../Components/ReusableComponents/Dropdown';
import StartDatePicker from '../Components/SetUp/StartDatePicker';
import TextfieldShort from '../Components/ReusableComponents/TextfieldShort';
import EquipmentTextfield from '../Components/SetUp/EquipmentTextfield';
// Interface Imports
import { hobbyPostInput } from '../Interfaces/interfaces';

interface Props {}

const useStyles = makeStyles((muiTheme) => ({
  setUpDiv: {
    width: '90%',
    flexGrow: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperDiv: {},
}));

const SetUp: FC = (props: Props) => {
  const classes = useStyles();
  let history = useHistory();

  const { postHobbies } = useContext(AuthContext);

  const genre: string[] = [
    'genre',
    'Music',
    'Photography',
    'Dancing',
    'Sports',
    'Painting',
    'Kitchen',
  ];
  const level: string[] = [
    'level',
    'Beginner',
    'Advanced',
    'Intermediate',
    'Profession',
  ];
  const [input, setInput] = useState<hobbyPostInput>({
    genre: '',
    hobby: '',
    level: '',
    start: new Date(),
    equipment: '',
    curiosity: 2,
  });

  const onClickHandler = () => {
    postHobbies(input);
    history.push('/');
  };

  // console.log("SetUp: Hobby Input:", hobbyInput);

  return (
    <div className={classes.setUpDiv}>
      <Paper className={classes.paperDiv}>
        <Box m={2}>
          <Dropdown
            title={'CHOOSE YOUR HOBBY GENRE '}
            value={'genre'}
            data={genre}
            input={input}
            setInput={setInput}
          />
        </Box>
        <Box m={2}>
          <TextfieldShort
            title={'NAME YOUR HOBBY'}
            value={'hobby'}
            input={input}
            setInput={setInput}
          />
          <EquipmentTextfield input={input} setInput={setInput} />
        </Box>
        <Box m={2}>
          <Dropdown
            title={'CHOOSE YOUR HOBBY LEVEL'}
            value={'level'}
            data={level}
            input={input}
            setInput={setInput}
          />
        </Box>
        <Box m={2}>
          <StartDatePicker input={input} setInput={setInput} />
        </Box>
        <Box m={2}>
          <CuriositySlider input={input} setInput={setInput} />
        </Box>
        <Box m={2}>
          <Button onClick={onClickHandler} variant="outlined">
            Create Your Curiosity
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default SetUp;
