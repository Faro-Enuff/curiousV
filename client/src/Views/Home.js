import React, { useEffect, useContext } from "react";

// Context Imports
import { HobbiesContext, AuthContext } from "../Context/hobbiesContext";

// Internal Imports
import CVTimeline from "../Components/CVTimeline";
import Navbar from "../Navigation/Navbar";
import Timeline from "../Components/Timeline Creative TIM/Timeline";
import stories from "../Components/Timeline Creative TIM/stories";
import Enso from "../Images/Enso.png";

// MUI Core Imports
import { Card, Typography, Box } from "@mui/material";
import Profile from "../Components/Profile";
import AssEqCard from "../Components/AssEqCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  const classes = useStyles();
  const { getHobbies, userHobby } = useContext(HobbiesContext);

  useEffect(() => {
    getHobbies();
  }, []);

  console.log(userHobby);

  return (
    <Box sx={{ m: "5%" }} className={classes.home}>
      <Navbar />
      <Box
        sx={{ display: "flex", flexDirection: "row", width: "100%", mt: "10%" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Typography variant="h5">{`My ${userHobby?.hobby} cV`}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mr: "5%" }}>
          <Profile />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <h1>Box I</h1>
          <AssEqCard header={"Equipment"} body={userHobby?.equipment} />
          <AssEqCard header={"Assignment"} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <h1>Box II</h1>
          <Timeline stories={stories} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
