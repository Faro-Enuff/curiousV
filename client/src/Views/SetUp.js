import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();

  const { loggedInUser, postHobbies } = useContext(AuthContext);
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
    genre: "",
    hobby: "",
    level: "",
    start: new Date(),
    equipment: "",
    curiosity: 2,
  });

  const onClickHandler = () => {
    postHobbies(hobbyInput);
    history.push("/");
  };

  // console.log("SetUp: Hobby Input:", hobbyInput);

  return (
    <div className="">
      <Box m={2}>
        <h1>{loggedInUser?.artistName}</h1>
      </Box>
      <Box m={2}>
        <Dropdown
          title={"CHOOSE YOUR HOBBY GENRE "}
          data={genre}
          input={hobbyInput}
          setInput={setHobbyInput}
        />
      </Box>
      <Box m={2}>
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
      <Box m={2}>
        <Dropdown
          title={"CHOOSE YOUR HOBBY LEVEL"}
          data={level}
          input={hobbyInput}
          setInput={setHobbyInput}
        />
      </Box>
      <Box m={2}>
        <StartDatepicker
          hobbyInput={hobbyInput}
          setHobbyInput={setHobbyInput}
        />
      </Box>
      <Box m={2}>
        <CuriositySlider
          hobbyInput={hobbyInput}
          setHobbyInput={setHobbyInput}
        />
      </Box>
      <Box m={2}>
        <Button onClick={onClickHandler} variant="outlined">
          Create Your Curiosity
        </Button>
      </Box>
    </div>
  );
};
export default SetUp;
