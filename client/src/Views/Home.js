import React, { useEffect, useContext, useState } from "react";

// Context Imports
import { HobbiesContext } from "../Context/hobbiesContext";
import { AuthContext } from "../Context/authContext";
import { UserContext } from "../Context/userContext";

// Internal Imports
import CVTimeline from "../Components/CVTimeline";
import Navbar from "../Navigation/Navbar";
import Timeline from "../Components/Timeline Creative TIM/Timeline";
import stories from "../Components/Timeline Creative TIM/stories";
import Enso from "../Images/Enso.png";

// MUI Core Imports
import { Card, Typography, Box, Container, Paper, Grid } from "@mui/material";
import Profile from "../Components/Profile";
import AssEqCard from "../Components/AssEqCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (muiTheme) => (
    console.log(muiTheme),
    {
      timeline: {
        maxHeight: "58%",
        overflow: "scroll",
        webkitScrollbar: {
          display: "none",
        },
      },
    }
  )
);

const Home = () => {
  const classes = useStyles();
  const { getHobbies, userHobby } = useContext(HobbiesContext);

  useEffect(() => {
    getHobbies();
  }, []);

  console.log(`Home: userHobby : >>`, userHobby);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.home}>
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              mt: "5%",
              mb: "10%",
            }}
          >
            <Paper>
              {userHobby && (
                <Typography variant="h5">{`My ${userHobby?.hobby} cV`}</Typography>
              )}
              <Typography variant="body1">{userHobby?.hobby}</Typography>
              <Profile />
            </Paper>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
          >
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Card color="text.primary">
                <Typography variant="h5" textAlign={"center"}>
                  Cursignments
                </Typography>
              </Card>
              <AssEqCard header={"Equipment"} body={userHobby?.equipment} />
              <AssEqCard header={"Assignment"} />
            </Box>
            <Box sx={{ flexGrow: 3, ml: 2 }}>
              <Card>
                <Typography variant="h5" textAlign={"center"}>
                  Timeline
                </Typography>
              </Card>
              <div className={classes.timeline}>
                <Timeline stories={stories} />
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Home;
