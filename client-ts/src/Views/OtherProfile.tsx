import React, { FC, useEffect, useState, useContext } from 'react';

// Custom Hooks
import { useFetch } from '../Utils/useFetch';

// Internal Imports
import Loader from '../Utils/Loader';
import Timeline from '../Components/Timeline Creative TIM/Timeline';
import AssEqCard from '../Components/ReusableComponents/AssEqCard';
import Enso from '../Images/EnsoTransparent.png';

// MUI Core Imports
import { Card, Typography, Box, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

// Rect Router dom
import { useParams } from 'react-router-dom';
import { CreationContext } from '../Context/creationContext';

interface Props {}

const CustomizedPaper = styled(Paper)`
  border-radius: 15px;
`;

const CustomizedCard = styled(Card)`
  border-radius: 150px;
  margin: '5%';
  box-shadow: 2px 2px 4px 4px #c3d3d1;
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
  heading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  avatar: {
    boxShadow: '1px 1px 3px 3px  #87A8A4',
    marginTop: '1%',
    marginBottom: '3%',
    marginLeft: '5%',
  },
  cursignment: {
    flex: 1,
    overflowY: 'auto',
    maxHeight: '320px',
    marginBottom: '10%',
    marginTop: '8%',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
  },
  cursignmentBody: {
    flex: 1,
  },
  timeline: {
    flex: 1,
    overflowY: 'auto',
    maxHeight: '270px',
    marginBottom: '5%',
    marginTop: '3%',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
  },
  timelineBody: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}));

const OtherProfile: FC<Props> = () => {
  const classes = useStyles();

  const { userId } = useParams<{ userId?: string }>();
  const { creations, setCreations } = useContext(CreationContext);

  // Use Fetch for Profile
  ////////////////////////////////////////////////////////////////////////////////////
  const { apiData: profile } = useFetch(
    'get',
    `http://localhost:5000/api/users/selectedProfile/${userId}`
  );
  ////////////////////////////////////////////////////////////////////////////////////
  // Use Fetch for Timeline
  ////////////////////////////////////////////////////////////////////////////////////
  const { isLoading: loaderCreations, apiData: creationsData } = useFetch(
    'get',
    `http://localhost:5000/api/creations/getOtherUsersCreations/${userId}`
  );
  ////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setCreations(creationsData);
  }, [creationsData]);

  // Use Fetch for Cursignments
  const { isLoading: loaderUserCollection, apiData: collectionFetch } =
    useFetch(
      'get',
      `http://localhost:5000/api/collections/getOtherUserCollection/${userId}`
    );
  ////////////////////////////////////////////////////////////////////////////////////
  const [userCollection, setUserCollection] = useState<any>();

  useEffect(() => {
    setUserCollection(collectionFetch?.userCollection[0]);
  }, [collectionFetch]);

  // console.log('User Collection : >> ', userCollection && userCollection);

  // console.log('Collection Fetch : >>', collectionFetch);

  return (
    <div className={classes.home}>
      {loaderCreations && loaderUserCollection && <Loader />}
      <div className={classes.homeDiv}>
        <div className={classes.test}>
          <div className={classes.heading}>
            {profile && (
              <Typography
                variant="h5"
                noWrap
                color="primary"
                component="div"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {`${profile.user.artistName}'s | ${
                  profile.user.hobbies[0]?.genre
                    ? profile.user.hobbies[0]?.genre
                    : ''
                } cV`}
              </Typography>
            )}
            <Avatar
              className={classes.avatar}
              sx={{ width: 51, height: 51 }}
              src={
                profile?.user.profileImage ? profile.user.profileImage : Enso
              }
            />
          </div>
          <div className={classes.timeline}>
            <Box sx={{ flexGrow: 3 }}>
              <CustomizedPaper>
                <Typography
                  color="secondary"
                  variant="h4"
                  textAlign={'center'}
                  sx={{ p: 2 }}
                >
                  Timeline
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pb: 1,
                  }}
                >
                  <hr className="beautyHr" />
                </Box>
                <div className={classes.timelineBody}>
                  <Timeline creations={creations && creations} />
                </div>
              </CustomizedPaper>
            </Box>
          </div>
          <CustomizedCard></CustomizedCard>
          <div className={classes.cursignment}>
            <Box sx={{ flexGrow: 3 }}>
              <CustomizedPaper>
                <Typography
                  sx={{ p: 2 }}
                  variant="h4"
                  color="secondary"
                  textAlign={'center'}
                >
                  Cursignments
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pb: 1,
                  }}
                >
                  <hr className="beautyHr" />
                </Box>
                <div className={classes.cursignmentBody}>
                  <AssEqCard
                    header={'Cursignments'}
                    body={userCollection && userCollection.summons}
                  />
                </div>
              </CustomizedPaper>
            </Box>
          </div>
          <CustomizedCard></CustomizedCard>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
