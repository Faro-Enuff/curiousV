import * as React from "react";

// MUI Core Imports
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles";

// MUI Icon Imports
import HomeMiniIcon from "@mui/icons-material/HomeMini";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    bottom: 0,
    position: "fixed",
  },
}));

const BottomNavigationCustom = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      className={classes.bottomNav}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction icon={<AssignmentIcon />} />
      <BottomNavigationAction icon={<HomeMiniIcon />} />
      <BottomNavigationAction icon={<SearchIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationCustom;
