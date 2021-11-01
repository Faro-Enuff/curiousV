import React, { FC } from 'react';

// Custom Hooks
import { useFetch } from '../Utils/useFetch';

// Internal Imports
import Loader from '../Utils/Loader';
// import Timeline from '../Components/Timeline Creative TIM/Timeline';
// import stories from '../Components/Timeline Creative TIM/stories';

// MUI Core Imports
import { Card, Typography, Box, Container, Paper } from '@mui/material';
// import Profile from '../Components/Profile';
// import AssEqCard from '../Components/AssEqCard';
import { makeStyles } from '@material-ui/core/styles';

interface Props {}

const useStyles = makeStyles((muiTheme) => ({
  profilePaper: {
    marginTop: '10%',
  },
  timeline: {
    maxHeight: '58%',
    overflow: 'scroll',
    webkitScrollbar: {
      display: 'none',
    },
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

  const { apiData: userSummons } = useFetch(
    'get',
    'http://localhost:5000/api/summons/getSummons'
  );
  console.log(userSummons);

  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <Loader />}
      <div>
        <Box sx={{}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              mt: '5%',
              mb: '10%',
            }}
          >
            <Paper className={classes.profilePaper}>
              {user && <Typography variant="h5"> cV</Typography>}
              <Typography variant="body1"></Typography>
              {/* <Profile /> */}
            </Paper>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}
          >
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Card color="text.primary">
                <Typography variant="h5" textAlign={'center'}>
                  Cursignments
                </Typography>
              </Card>
              {/* <AssEqCard header={'Equipment'} body={user.hobbies.equipment} /> */}
              {userSummons &&
                userSummons.userSummons.map((summon: any) => {
                  return (
                    <div key={summon._id}>
                      {/* <AssEqCard header={summon.assignmentTitle} /> */}
                    </div>
                  );
                })}
            </Box>
            <Box sx={{ flexGrow: 3, ml: 2 }}>
              <Card>
                <Typography variant="h5" textAlign={'center'}>
                  Timeline
                </Typography>
              </Card>
              <div className={classes.timeline}>
                {/* <Timeline stories={stories} /> */}
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Home;
