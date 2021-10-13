import React, { useContext, useState } from "react";

// Context Import
import { HobbiesContext } from "../Context/hobbiesContext";
import { AuthContext } from "../Context/authContext";

// Internal Imports
import CuriositySlider from "../Components/SetUpComponents/CuriositySlider";
import Dropdown from "../Components/ReuseableComponents/Dropdown";
import StartDatepicker from "../Components/SetUpComponents/StartDatepicker";
import TextfieldShort from "../Components/ReuseableComponents/TextfieldShort";
import EquipmentTextfield from "../Components/SetUpComponents/EquipmentTextfield";

// MUI Core Imports
import { Box, Button } from "@mui/material";

const SetUp = () => {
  const { getHobbies, postHobbies } = useContext(HobbiesContext);
  const { loggedInUser } = useContext(AuthContext);
  const genre = [
    "genre",
    "Music",
    "Photography",
    "Dancing",
    "Sports",
    "Painting",
    "Kitchen",
  ];
  const level = ["level", "Beginner", "Advanced", "Intermediate", "Profession"];
  const [hobbyInput, setHobbyInput] = useState({
    userId: loggedInUser?.id,
    artistName: loggedInUser?.artistName,
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
        <h1>{loggedInUser?.artistName}</h1>
      </Box>
      <Box m={3}>
        <Dropdown
          title={"CHOOSE YOUR HOBBY GENRE "}
          data={genre}
          input={hobbyInput}
          setInput={setHobbyInput}
        />
      </Box>
      <Box m={3}>
        <TextfieldShort
          title={"NAME YOUR HOBBY"}
          value={"hobby"}
          input={hobbyInput}
          setInput={setHobbyInput}
        />
        <EquipmentTextfield
          hobbyInput={hobbyInput}
          setHobbyInput={setHobbyInput}
        />
      </Box>
      <Box m={3}>
        <Dropdown
          title={"CHOOSE YOUR HOBBY LEVEL"}
          data={level}
          input={hobbyInput}
          setInput={setHobbyInput}
        />
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
