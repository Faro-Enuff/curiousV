import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// Context Imports
import { SummonContext } from '../Context/summonContext';
// Internal Imports
import TextfieldShort from '../Components/ReusableComponents/TextfieldShort';
import DateRangePicker from '../Components/Summon/DateRangePicker';
import Dropdown from '../Components/ReusableComponents/Dropdown';
// MUI Imports
import { Paper, Box, Button, Input, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
// MUI Icons Import
import FileUploadIcon from '@mui/icons-material/FileUpload';
// Interface Imports
import { Summon } from '../Interfaces/interfaces';

interface Props {}

const useStyles = makeStyles({
  buildDiv: {
    width: '90%',
    height: '80%',
    flexGrow: 1,
    overflowY: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: '15px',
    boxShadow: '2px 2px 4px 3px #c3d3d1',
  },
});

const CustomizedPaper = styled(Paper)`
  border-radius: 15px;
`;

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

  // console.log(summonInput);

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
      <CustomizedPaper>
        <Box sx={{ pt: 0.1, pb: 0.1 }}>
          <Box m={2}>
            <Typography
              color="secondary"
              variant="h4"
              sx={{ textAlign: 'center' }}
            >
              Build Your Cursignment
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
                <Button
                  variant="contained"
                  size="small"
                  component="span"
                  color={'secondary'}
                >
                  <FileUploadIcon
                    color="primary"
                    fontSize="medium"
                    style={{ cursor: 'pointer' }}
                  />
                  {`   File Upload`}
                </Button>
              </label>
            </form>
            <Typography variant="body1" sx={{ mt: 2 }}>{`Chosen File: ${
              summonInput?.learningFile?.name
                ? summonInput?.learningFile?.name
                : 'none'
            }`}</Typography>
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
          <Box sx={{ ml: 2, mb: 5, mr: 2 }}>
            <DateRangePicker
              title={'CHOOSE YOUR TIME FRAME'}
              input={summonInput}
              setInput={setSummonInput}
            />
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

export default SummonBuild;
