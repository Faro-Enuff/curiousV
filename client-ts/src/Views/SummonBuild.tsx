import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// Context Imports
import { SummonContext } from '../Context/summonContext';
// Internal Imports
import TextfieldShort from '../Components/ReusableComponents/TextfieldShort';
import DateRangePicker from '../Components/Summon/DateRangePicker';
import Dropdown from '../Components/ReusableComponents/Dropdown';
// MUI Imports
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Button, Input } from '@mui/material';
// MUI Icons Import
import FileUploadIcon from '@mui/icons-material/FileUpload';
// Interface Imports
import { Summon } from '../Interfaces/interfaces';

interface Props {}

const useStyles = makeStyles({
  buildDiv: {
    width: '90%',
    flexGrow: 1,
    overflowY: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

const SummonBuild = (props: Props) => {
  const classes = useStyles();
  let history = useHistory();
  const { postSummon } = useContext(SummonContext);

  const source: string[] = [
    'learningSource',
    'Online Tutorial',
    'Online Guide',
    'Book',
    'Blog',
    'Other Source',
  ];

  const complexity: string[] = ['complexity', 'LOW', 'MEDIUM', 'HIGH'];

  const [summonInput, setSummonInput] = useState<Summon>({
    assignmentTitle: '',
    timeFrame: [null, null],
    startDate: new Date(0),
    endDate: new Date(0),
    learningSource: '',
    learningMaterial: '',
    learningFile: null,
    complexity: '',
  });

  console.log(summonInput);

  const onClickHandler = () => {
    // Transform Object in Array
    const objectArray = Object.entries(summonInput);
    // console.log(objectArray);

    // Transform Array in to FormData
    const formData: FormData = new FormData();
    objectArray.forEach(([key, value]) => {
      formData.append(key, value);
    });

    // To clg the formData
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    // Post Data to the API
    postSummon(formData);
    setSummonInput({
      assignmentTitle: '',
      timeFrame: [null, null],
      startDate: new Date(0),
      endDate: new Date(0),
      learningSource: '',
      learningMaterial: '',
      learningFile: null,
      complexity: '',
    });
    history.push('/');
  };

  const fileSelectedHandler = (event: any) => {
    if (event.target.files) {
      handleUpload(event.target.files);
    }
    console.log(event.target.files[0]);
  };

  const handleUpload = (files: File[]) => {
    const file: File = files[0];
    console.log(file);
    setSummonInput({
      ...summonInput,
      learningFile: file,
    });
  };

  return (
    <div className={classes.buildDiv}>
      <Paper>
        <Box sx={{ pt: 0.1, pb: 0.1 }}>
          <Box m={2}>
            <TextfieldShort
              title={'NAME YOUR CURSIGNMENT'}
              value={'assignmentTitle'}
              input={summonInput}
              setInput={setSummonInput}
            />
          </Box>
          <Box m={2}>
            <Dropdown
              title={'CHOOSE YOUR LEARNING SOURCE'}
              value={summonInput.learningSource}
              data={source}
              input={summonInput}
              setInput={setSummonInput}
            />
          </Box>
          <Box m={2}>
            <TextfieldShort
              title={'Specify YOUR SOURCE (e.g. URL)'}
              value={'learningMaterial'}
              input={summonInput}
              setInput={setSummonInput}
            />
            <form method="post" encType="multipart/form-data">
              <Input
                required
                type="file"
                id="imageUpload"
                name="learningFile"
                onChange={fileSelectedHandler}
              />
              <label htmlFor="imageUpload">
                <FileUploadIcon
                  color="secondary"
                  fontSize="large"
                  style={{ cursor: 'pointer' }}
                />
              </label>
            </form>
          </Box>
          <Box m={2}>
            <Dropdown
              title={'RATE THE COMPLEXITY UPFRONT'}
              value={summonInput.complexity}
              data={complexity}
              input={summonInput}
              setInput={setSummonInput}
            />
          </Box>
          <Box m={2}>
            <DateRangePicker
              title={'CHOOSE YOUR TIME FRAME'}
              input={summonInput}
              setInput={setSummonInput}
            />
          </Box>
          <Box m={2}>
            <Button onClick={onClickHandler} variant="outlined">
              Create Your CURSIGNMENT
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default SummonBuild;
