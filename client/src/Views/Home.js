import React, { useEffect, useContext, useState } from "react";

// Context Imports
import { HobbiesContext } from "../Context/hobbiesContext";
import { AuthContext } from "../Context/authContext";
import { UserContext } from "../Context/userContext";

// Custom Hooks
import { useFetch } from "../Utils/useFetch";

// Internal Imports
import Loader from "../Utils/Loader";
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

  // Hobbies useFetch API
  const {
    isLoading,
    apiData: hobbies,
    serverError,
  } = useFetch("get", "http://localhost:5000/api/hobbies/getUserHobby");

  console.log(hobbies);

  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <Loader />}
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
              {hobbies?.userHobby[0] && (
                <Typography variant="h5">{`My ${hobbies?.userHobby[0]?.hobby} cV`}</Typography>
              )}
              <Typography variant="body1">
                {hobbies?.userHobby[0]?.hobby}
              </Typography>
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
              <AssEqCard
                header={"Equipment"}
                body={hobbies?.userHobby[0]?.equipment}
              />
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
