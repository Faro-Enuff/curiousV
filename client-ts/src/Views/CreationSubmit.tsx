import React, { FC, useState, useEffect } from 'react';

// MUI Imports
import { Box, Typography, Card, Input, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

// Other NPM Imports
import { useParams } from 'react-router-dom';

// Internal Imports
import { useFetch } from '../Utils/useFetch';
import Dropdown from '../Components/ReusableComponents/Dropdown';
import CustomRating from '../Components/Creations/CustomRating';
import Loader from '../Utils/Loader';
import TextfieldShort from '../Components/ReusableComponents/TextfieldShort';
import { handleUpload } from '../Utils/handleUpload';

// Interface Imports
import { Creation } from '../Interfaces/interfaces';

// MUI Icons Import
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface Props {}

const useStyles = makeStyles({
  mainCard: {
    width: '90%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfieldTimeInvestment: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  textfieldWidth: {
    maxWidth: '50%',
  },
  dropdownWidth: {
    minWidth: '40%',
  },
});

const CreationSubmit: FC<Props> = () => {
  const classes = useStyles();
  let { id } = useParams<{ id: string }>();

  const { isLoading, apiData: summon } = useFetch(
    'get',
    `http://localhost:5000/api/summons/getSummon/${id}`
  );

  console.log(id, summon);

  const timeUnities: string[] = [
    'timeUnit',
    'hour/s',
    'week/s',
    'month/s',
    'year/s',
  ];

  const [creationInput, setCreationInput] = useState<Creation>({
    approxTimeInvestment: '',
    timeUnit: '',
    funFactor: 0,
    file: null,
    summonId: summon?.userSummon._id,
  });

  useEffect(() => {
    setCreationInput({ ...creationInput, summonId: summon?.userSummon._id });
  }, [summon]);

  const fileSelectedHandler = (event: any) => {
    if (event.target.files) {
      handleUpload(event.target.files, creationInput, setCreationInput);
    }
    console.log(event.target.files[0]);
  };
  console.log('Creation Input : >>', creationInput);

  return (
    <div className={classes.mainCard}>
      {isLoading && <Loader />}
      <Card>
        <Typography variant="h4">Submit your Creation</Typography>
        <hr className="beautyHr" />
        <Typography variant="h6">
          Title: {summon?.userSummon.assignmentTitle}
        </Typography>
        <div className={classes.textfieldTimeInvestment}>
          <div className={classes.textfieldWidth}>
            <TextfieldShort
              title={'YOUR TIME INVESTMENT'}
              value={'approxTimeInvestment'}
              input={creationInput}
              setInput={setCreationInput}
            />
          </div>
          <div className={classes.dropdownWidth}>
            <Dropdown
              title={'UNIT'}
              value={creationInput.timeUnit}
              data={timeUnities}
              input={creationInput}
              setInput={setCreationInput}
            />
          </div>
        </div>
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
              {`  ...File Upload`}
            </Button>
          </label>
        </form>
        <Typography variant="body1">{`Chosen File: ${
          creationInput?.file?.name ? creationInput?.file?.name : 'none'
        }`}</Typography>
        <Box sx={{ m: 2 }}>
          <CustomRating input={creationInput} setInput={setCreationInput} />
        </Box>
      </Card>
    </div>
  );
};

export default CreationSubmit;
