import React, { useEffect, useContext } from "react";

// Context Imports
import { HobbiesContext } from "../Context/hobbiesContext";
import { AuthContext } from "../Context/authContext";
// Internal Imports
import CVTimeline from "../Components/CVTimeline";
import Navbar from "../Navigation/Navbar";
import Timeline from "../Components/Timeline Creative TIM/Timeline";
import stories from "../Components/Timeline Creative TIM/stories";
import Enso from "../Images/Enso.png";

// MUI Core Imports
import { Card, Typography, Box, Container, Grid } from "@mui/material";
import Profile from "../Components/Profile";
import AssEqCard from "../Components/AssEqCard";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";

const useStyles = makeStyles(
  (theme) => (
    console.log(theme),
    {
      timeline: {
        maxHeight: "68%",
        overflow: "scroll",
        overflowX: "hidden",
      },
    }
  )
);

const Home = () => {
  const classes = useStyles();
  const { loggedInUser } = useContext(AuthContext);
  const { getHobbies, userHobby } = useContext(HobbiesContext);

  useEffect(() => {
    getHobbies();
  }, [loggedInUser]);

  console.log(loggedInUser);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.home}>
        <Box sx={{ mt: "30%" }}>
          <Navbar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              mt: "5%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              {userHobby && (
                <Typography variant="h5">{`My ${userHobby?.hobby} cV`}</Typography>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: "5%",
                overflow: "hidden",
              }}
              className={classes.profile}
            >
              <Profile />
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
          >
            <Box>
              <h1>Box I</h1>
              <AssEqCard header={"Equipment"} body={userHobby?.equipment} />
              <AssEqCard header={"Assignment"} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <h1>Box II</h1>
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
