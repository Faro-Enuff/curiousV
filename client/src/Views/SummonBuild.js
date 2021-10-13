import React, { useContext, useState } from "react";

// Internal Imports
import DateRangePicker from "../Components/Summon/DateRangePicker";
import Dropdown from "../Components/ReuseableComponents/Dropdown";

// MUI Imports
import { Box } from "@mui/material";
import { AuthContext } from "../Context/authContext";

const SummonBuild = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [summonInput, setSummonInput] = useState({
    userId: loggedInUser.id,
    assignmentTitle: "",
    startDate: "",
    endDate: "",
    learningSource: "",
    learningMaterial: "",
    complexity: "",
    summonToCreate: false,
  });

  return (
    <div className="">
      <Box m={3}>
        <Dropdown />
      </Box>
      <Box m={3}>
        <DateRangePicker />
      </Box>
    </div>
  );
};

export default SummonBuild;
