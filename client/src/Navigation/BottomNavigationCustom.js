import * as React from "react";

// MUI Core Imports
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles";

// MUI Icon Imports
import HomeMiniIcon from "@mui/icons-material/HomeMini";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";

const useStyles = makeStyles({
  bottomNav: {
    bottom: "0%",
    position: "fixed",
  },
});

const BottomNavigationCustom = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
      color="secondary"
    >
      <BottomNavigationAction icon={<AssignmentIcon color="secondary" />} />
      <BottomNavigationAction icon={<HomeMiniIcon color="secondary" />} />
      <BottomNavigationAction icon={<SearchIcon color="secondary" />} />
    </BottomNavigation>
  );
};

export default BottomNavigationCustom;
