import React, { FC, useState, useEffect, useContext } from 'react';

// MUI Imports
import { Box, Typography, Card, Input, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';

// Other NPM Imports
import { useParams, useHistory } from 'react-router-dom';

// Context imports
import { CreationContext } from '../Context/creationContext';

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

const StyledCard = styled(Card)`
  border-radius: 20px;
  box-shadow: 3px 1px 4px 4px #c3d3d1;
`;

const useStyles = makeStyles({
  creationFrame: {
    width: '90%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFrame: {
    padding: '5%',
    borderRadius: '20px',
  },
  textfieldTimeInvestment: {
    maxWidth: '100%',
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',
  },
  textfieldWidth: {
    minWidth: '60%',
    marginRight: '3%',
  },
  dropdownWidth: {
    minWidth: '50%',
  },
  ratingDiv: {
    width: '100%',
    marginLeft: '15%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  formDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CreationSubmit: FC<Props> = () => {
  const classes = useStyles();
  // userParams for summonId out of URL & History
  let { id } = useParams<{ id: string }>();
  let history = useHistory();
  // useFetch for specific Summon
  const { isLoading, apiData: summon } = useFetch(
    'get',
    `http://localhost:5000/api/summons/getSummon/${id}`
  );
  // Creation Context
  const { postCreation, updateCollection } = useContext(CreationContext);

  console.log(id, summon);

  const timeUnities: string[] = [
    'timeUnit',
    'hour/s',
    'day/s',
    'week/s',
    'month/s',
    'year/s',
  ];

  const [creationInput, setCreationInput] = useState<Creation>({
    approxTimeInvestment: 0,
    timeUnit: '',
    funFactor: 0,
    creationFile: null,
    summonId: summon?.userSummon._id,
  });

  useEffect(() => {
    setCreationInput({ ...creationInput, summonId: summon?.userSummon._id });
  }, [summon]);

  // File Upload Handler
  const fileSelectedHandler = (event: any): void => {
    if (event.target.files) {
      handleUpload(
        event.target.files,
        creationInput,
        'creationFile',
        setCreationInput
      );
    }
    console.log(event.target.files[0]);
  };
  console.log('Creation Input : >>', creationInput);

  // Submit Handler
  const handleClickSubmit = (): void => {
    // Transform Object in Array
    const objectArray = Object.entries(creationInput);
    //console.log("Object Array Creation: >>", objectArray);

    // Transform Array in to formData
    const formData: FormData = new FormData();
    objectArray.forEach(([key, value]) => {
      formData.append(key, value);
    });
    // To clg the formData
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    // Post Creation Data to API
    postCreation(formData);
    updateCollection(id);
    setCreationInput({
      approxTimeInvestment: 0,
      timeUnit: '',
      funFactor: 0,
      creationFile: null,
      summonId: '',
    });
    history.push('/');
  };

  return (
    <div className={classes.creationFrame}>
      {isLoading && <Loader />}
      <StyledCard className={classes.cardFrame}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Submit your Creation
        </Typography>
        <Box sx={{ mt: 1, mb: 2 }}>
          <hr className="beautyHr" />
        </Box>
        <Typography variant="h6">
          Title: {summon?.userSummon.assignmentTitle}
        </Typography>
        <Typography variant="body1">
          Author: {summon?.userSummon.author.artistName}
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
        <div className={classes.ratingDiv}>
          <CustomRating input={creationInput} setInput={setCreationInput} />
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 3 }}>
          <hr className="beautyHr" />
        </Box>
        <form
          method="post"
          encType="multipart/form-data"
          className={classes.formDiv}
        >
          <Input
            required
            type="file"
            id="imageUpload"
            name="creationFile"
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
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mt: 2 }}
        >{`Chosen File: ${
          creationInput?.creationFile?.name
            ? creationInput?.creationFile?.name
            : 'none'
        }`}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 3 }}>
          <hr className="beautyHrExtraSmall" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClickSubmit}
          >
            Submit
          </Button>
        </Box>
      </StyledCard>
    </div>
  );
};

export default CreationSubmit;
