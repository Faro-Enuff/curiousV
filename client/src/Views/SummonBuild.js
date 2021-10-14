import React, { useContext, useState, useRef, useEffect } from "react";

// Context Imports
import { AuthContext } from "../Context/authContext";
import { SummonsContext } from "../Context/summonsContext";

// Internal Imports
import TextfieldShort from "../Components/ReuseableComponents/TextfieldShort";
import DateRangePicker from "../Components/Summon/DateRangePicker";
import Dropdown from "../Components/ReuseableComponents/Dropdown";

// MUI Imports
import { Box, Button, Input } from "@mui/material";
// MUI Icons Import
import FileUploadIcon from "@mui/icons-material/FileUpload";

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
    startDate: "",
    endDate: "",
    learningSource: "",
    learningMaterial: "",
    learningFile: "",
    complexity: "",
    summonToCreate: false,
  });

  const onClickHandler = () => {
    // Transform Object in Array
    const objectArray = Object.entries(summonInput);
    // console.log(objectArray);

    // Transform Array in to FormData
    const formData = new FormData();
    objectArray.forEach(([key, value]) => {
      formData.append(key, value);
    });

    // To clg the formData
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    // Post Data to the API
    postSummon(formData);
  };

  const fileSelectedHandler = (event) => {
    if (event.target.files) {
      handleUpload(event.target.files);
    }
    console.log(event.target.files[0]);
    setSummonInput({ ...summonInput, ["learningFile"]: event.target.files[0] });
  };

  const handleUpload = (files) => {
    const file = files[0];
    console.log(file);
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
        <form method="post" encType="multipart/form-data">
          <Input
            required
            type="file"
            id="imageUpload"
            name="learningFile"
            onClick={fileSelectedHandler}
          />
          <label htmlFor="imageUpload">
            <FileUploadIcon
              color="secondary"
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
          </label>
        </form>
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
