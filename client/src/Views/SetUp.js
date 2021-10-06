import React, { useContext, useState } from "react";

// Context Import
import { HobbiesContext } from "../Context/hobbiesContext";
import { AuthContext } from "../Context/authContext";

// Internal Imports
import CuriositySlider from "../Components/SetUpComponents/CuriositySlider";
import GenreDropdown from "../Components/SetUpComponents/GenreDropdown";
import StartDatepicker from "../Components/SetUpComponents/StartDatepicker";
import LevelDropdown from "../Components/SetUpComponents/LevelDropdown";
import HobbyTextfield from "../Components/SetUpComponents/HobbyTextfield";
import EquipmentTextfield from "../Components/SetUpComponents/EquipmentTextfield";

// MUI Core Imports
import { Box, Button } from "@mui/material";

const SetUp = () => {
  const { getHobbies, postHobbies } = useContext(HobbiesContext);
  const { loggedInUser } = useContext(AuthContext);
  const [hobbyInput, setHobbyInput] = useState({
    userId: loggedInUser.id,
    artistName: loggedInUser.artistName,
    genre: "",
    hobby: "",
    level: "",
    start: new Date(),
    equipment: "",
    curiosity: 2,
  });

  const onClickHandler = () => {
    postHobbies(hobbyInput);
  };

  console.log(hobbyInput);
  console.log(loggedInUser);
  return (
    <div className="">
      <Box m={3}>
        <h1>{loggedInUser.artistName}</h1>
      </Box>
      <Box m={3}>
        <GenreDropdown hobbyInput={hobbyInput} setHobbyInput={setHobbyInput} />
      </Box>
      <Box m={3}>
        <HobbyTextfield hobbyInput={hobbyInput} setHobbyInput={setHobbyInput} />
        <EquipmentTextfield
          hobbyInput={hobbyInput}
          setHobbyInput={setHobbyInput}
        />
      </Box>
      <Box m={3}>
        <LevelDropdown hobbyInput={hobbyInput} setHobbyInput={setHobbyInput} />
      </Box>
      <Box m={3}>
        <StartDatepicker
          hobbyInput={hobbyInput}
          setHobbyInput={setHobbyInput}
        />
      </Box>
      <Box m={5}>
        <CuriositySlider
          hobbyInput={hobbyInput}
          setHobbyInput={setHobbyInput}
        />
      </Box>
      <Box m={3}>
        <Button onClick={onClickHandler} variant="outlined">
          Create Your Curiosity
        </Button>
      </Box>
    </div>
  );
};
export default SetUp;
