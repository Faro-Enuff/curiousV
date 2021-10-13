import React, { useContext, useState } from "react";

// Internal Imports
import DateRangePicker from "../Components/Summon/DateRangePicker";
import Dropdown from "../Components/ReuseableComponents/Dropdown";

// MUI Imports
import { Box } from "@mui/material";
import { AuthContext } from "../Context/authContext";
import TextfieldShort from "../Components/ReuseableComponents/TextfieldShort";

const SummonBuild = () => {
  const { loggedInUser } = useContext(AuthContext);

  const source = [
    "source",
    "Online Tutorial",
    "Online Guide",
    "Book",
    "Blog",
    "Other Source",
  ];

  const [summonInput, setSummonInput] = useState({
    userId: loggedInUser.id,
    assignmentTitle: "",
    timeFrame: "",
    learningSource: "",
    learningMaterial: "",
    complexity: "",
    summonToCreate: false,
  });

  return (
    <div className="">
      <Box m={3}>
        <TextfieldShort
          title={"NAME YOUR CURSIGNMENT"}
          value={"assignmentTitle"}
          input={summonInput}
          setInput={setSummonInput}
        />
      </Box>
      <Box m={3}>
        <Dropdown
          title={"CHOOSE YOUR LEARNING SOURCE"}
          data={source}
          input={summonInput}
          setInput={setSummonInput}
        />
      </Box>
      <Box m={3}>
        <DateRangePicker
          title={"CHOOSE YOUR TIME FRAME"}
          input={summonInput}
          setInput={setSummonInput}
        />
      </Box>
    </div>
  );
};

export default SummonBuild;
