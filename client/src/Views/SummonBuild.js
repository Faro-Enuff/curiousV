import React, { useContext, useState } from "react";

// Context Imports
import { AuthContext } from "../Context/authContext";
import { SummonsContext } from "../Context/summonsContext";

// Internal Imports
import TextfieldShort from "../Components/ReuseableComponents/TextfieldShort";
import DateRangePicker from "../Components/Summon/DateRangePicker";
import Dropdown from "../Components/ReuseableComponents/Dropdown";

// MUI Imports
import { Box, Button } from "@mui/material";

const SummonBuild = () => {
  const { getSummons, postSummon } = useContext(SummonsContext);
  const { loggedInUser } = useContext(AuthContext);

  const source = [
    "learningSource",
    "Online Tutorial",
    "Online Guide",
    "Book",
    "Blog",
    "Other Source",
  ];

  const complexity = ["complexity", "LOW", "MEDIUM", "HIGH"];

  const [summonInput, setSummonInput] = useState({
    userId: loggedInUser.id,
    assignmentTitle: "",
    timeFrame: [null, null],
    learningSource: "",
    learningMaterial: "",
    complexity: "",
    summonToCreate: false,
  });

  const onClickHandler = () => {
    postSummon(summonInput);
  };

  console.log(summonInput);

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
          value={summonInput.learningSource}
          data={source}
          input={summonInput}
          setInput={setSummonInput}
        />
      </Box>
      <Box m={3}>
        <TextfieldShort
          title={"Specify YOUR SOURCE (e.g. URL)"}
          value={"learningMaterial"}
          input={summonInput}
          setInput={setSummonInput}
        />
        // TODO Insert File Upload here
      </Box>
      <Box m={3}>
        <Dropdown
          title={"RATE THE COMPLEXITY UPFRONT"}
          value={summonInput.complexity}
          data={complexity}
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
      <Button onClick={onClickHandler} variant="outlined">
        Create Your CURSIGNMENT
      </Button>
    </div>
  );
};

export default SummonBuild;
