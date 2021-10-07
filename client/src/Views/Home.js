import React, { useEffect, useContext } from "react";

// Context Imports
import { HobbiesContext, AuthContext } from "../Context/hobbiesContext";

// Internal Imports
import CVTimeline from "../Components/CVTimeline";
import Navbar from "../Navigation/Navbar";

// MUI Core Imports
import { Card, Typography } from "@mui/material";

const Home = () => {
  const { getHobbies, userHobby } = useContext(HobbiesContext);

  useEffect(() => {
    getHobbies();
  }, []);

  console.log(userHobby);

  return (
    <div className="home">
      <h1>curiousV</h1>
      <Navbar />
      <Typography variant="h4">{`My ${userHobby?.hobby} cV`}</Typography>
      <Card>
        <Typography variant="h6">Equipment</Typography>
        <Typography variant="body1">{userHobby?.equipment}</Typography>
      </Card>
      <CVTimeline />
    </div>
  );
};

export default Home;
