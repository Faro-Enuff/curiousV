import React, { FC, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// Context Import
import { AuthContext } from '../Context/authContext';
// MUI Core Imports
import { Paper, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
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
    height: '80%',
    flexGrow: 1,
    overflowY: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: '15px',
    boxShadow: '2px 2px 4px 4px #c3d3d1',
  },
  paperDiv: {},
}));

const CustomizedPaper = styled(Paper)`
  border-radius: 15px;
`;

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
    hobbyTitle: '',
    level: '',
    start: new Date(),
    equipment: '',
    curiosity: 2,
  });

  const onClickHandler = () => {
    postHobbies(input);
    history.push('/');
  };

  console.log('SetUp: Hobby Input:', input);

  return (
    <div className={classes.setUpDiv}>
      <CustomizedPaper className={classes.paperDiv}>
        <Box sx={{ pt: 0.1, pb: 0.1 }}>
          <Box m={2}>
            <Typography
              color="secondary"
              variant="h4"
              sx={{ textAlign: 'center' }}
            >
              Unleash Your curiousV
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <hr className="beautyHr" />
          </Box>
          <Box m={2}>
            <Dropdown
              title={'CHOOSE YOUR HOBBY GENRE '}
              value={input.genre}
              data={genre}
              input={input}
              setInput={setInput}
            />
          </Box>
          <Box m={2}>
            <TextfieldShort
              title={'NAME YOUR HOBBY'}
              value={'hobbyTitle'}
              input={input}
              setInput={setInput}
            />
            <EquipmentTextfield input={input} setInput={setInput} />
          </Box>
          <Box m={2}>
            <CuriositySlider input={input} setInput={setInput} />
          </Box>
          <Box m={2}>
            <Dropdown
              title={'CHOOSE YOUR HOBBY LEVEL'}
              value={input.level}
              data={level}
              input={input}
              setInput={setInput}
            />
          </Box>
          <Box m={2}>
            <StartDatePicker input={input} setInput={setInput} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <hr className="beautyHr" />
          </Box>
          <Box
            sx={{
              mt: 3,
              mb: 3,
              ml: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button onClick={onClickHandler} size="large" variant="contained">
              CREATE
            </Button>
          </Box>
        </Box>
      </CustomizedPaper>
    </div>
  );
};

export default SetUp;
