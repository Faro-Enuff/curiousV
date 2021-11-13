import React, { FC } from 'react';

// Custom Hooks
import { useFetch } from '../Utils/useFetch';

// Internal Imports
import Loader from '../Utils/Loader';
import Timeline from '../Components/Timeline Creative TIM/Timeline';
import Summons from '../Components/Timeline Creative TIM/Summons';
import AssEqCard from '../Components/ReusableComponents/AssEqCard';
import Enso from '../Images/EnsoTransparent.png';
// MUI Core Imports
import { Card, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
// import Profile from '../Components/Profile';
// import AssEqCard from '../Components/AssEqCard';
import { makeStyles } from '@material-ui/core/styles';

interface Props {}

const CustomizedPaper = styled(Paper)`
  border-radius: 15px;
`;
const CustomizedCard = styled(Card)`
  border-radius: 8px;
  margin-bottom: 5%;
  box-shadow: 3px 1px 4px 4px #e0f7fa;
`;

const useStyles = makeStyles((muiTheme) => ({
  home: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  backgroundImageTopDiv: {
    opacity: 0.3,
    height: '10%',
    zIndex: 1,
    position: 'absolute',
  },
  homeDiv: {
    width: '90%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    marginTop: '5%',
    marginBottom: '2%',
    zIndex: 2,
    position: 'relative',
  },
  test: {},
  cursignment: {
    flex: 1,
    overflowY: 'auto',
    maxHeight: '320px',
    marginBottom: '10%',
    borderRadius: '10px',
    boxShadow: '3px 1px 4px 4px #e0f7fa',
  },
  cursignmentBody: {
    flex: 1,
  },
  timeline: {
    flex: 1,
    overflowY: 'auto',
    maxHeight: '200px',
    marginBottom: '5%',
    borderRadius: '10px',
    boxShadow: '3px 1px 4px 4px #e0f7fa',
  },
  timelineBody: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  backgroundImageDiv: {
    opacity: 0.6,
    height: '15%',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: 'auto',
    zIndex: 1,
  },
}));

const Home: FC = (props: Props) => {
  const classes = useStyles();

  // Hobbies useFetch API
  const { isLoading, apiData: user } = useFetch(
    'get',
    'http://localhost:5000/api/users/getUserHobby'
  );
  console.log(user);

  const { apiData: collectionFetch } = useFetch(
    'get',
    'http://localhost:5000/api/collections/getUserCollection'
  );
  console.log('Collection Fetch : >>', collectionFetch);

  return (
    <div className={classes.home}>
      {isLoading && <Loader />}
      {/* <div className={classes.backgroundImageTopDiv}>
        <img className={classes.backgroundImage} src={Enso} alt="Enso" />
      </div> */}
      <div className={classes.homeDiv}>
        <div className={classes.test}>
          <CustomizedCard>
            <Typography variant="h4" textAlign={'center'}>
              Timeline
            </Typography>
          </CustomizedCard>
          <div className={classes.timeline}>
            <Box sx={{ flexGrow: 3 }}>
              <CustomizedPaper>
                <div className={classes.timelineBody}>
                  <Timeline Summons={Summons} />
                </div>
              </CustomizedPaper>
            </Box>
          </div>
          <CustomizedCard>
            <Typography variant="h4" textAlign={'center'}>
              Cursignments
            </Typography>
          </CustomizedCard>
          <div className={classes.cursignment}>
            <Box sx={{ flexGrow: 3 }}>
              <CustomizedPaper>
                <div className={classes.cursignmentBody}>
                  <AssEqCard
                    header={'Cursignments'}
                    body={collectionFetch?.userCollection[0]?.summons}
                  />
                </div>
              </CustomizedPaper>
            </Box>
          </div>
        </div>
      </div>
      <div className={classes.backgroundImageDiv}>
        <img className={classes.backgroundImage} src={Enso} alt="Enso" />
      </div>
    </div>
  );
};

export default Home;
