import * as React from "react";

// MUI Core Imports
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// MUI Icon Imports
import HomeMiniIcon from "@mui/icons-material/HomeMini";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";

const useStyles = makeStyles({
  bottomNav: {
    bottom: 0,
    position: "fixed",
  },
});

const BottomNavigationCustom = () => {
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = React.useState(0);

  // Navigate Function
  const handleOnClickPush = (event) => {
    console.log(event.target.name);
    history.push(event.target.name);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      className={classes.bottomNav}
      position="fixed"
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        name="/createSummon"
        onClick={handleOnClickPush}
        icon={<AssignmentIcon color="secondary" />}
      />
      <BottomNavigationAction
        name="/"
        onClick={handleOnClickPush}
        icon={<HomeMiniIcon color="secondary" />}
      />
      <BottomNavigationAction
        name="/search"
        onClick={handleOnClickPush}
        icon={<SearchIcon color="secondary" />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationCustom;
