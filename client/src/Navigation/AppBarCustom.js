import * as React from "react";
import { useContext } from "react";

// Context Imports
import { AuthContext } from "../Context/authContext";

// MUI Core Imports
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

// Internal Imports
import MenuCostum from "../Components/AppBar/MenuCostum";

// Import Images
import Enso from "../Images/Enso.png";

// MUI Icon Imports
import MailIcon from "@mui/icons-material/Mail";

const useStyles = makeStyles(
  (muiTheme) => (
    console.log(muiTheme),
    {
      appBarBox: {
        top: 0,
        width: "100%",
        maxHeight: "15%",
        position: "fixed",
      },
      appBar: {
        minHeight: "15%",
        cssHip9hqMuiPaperRootMuiAppBarRoot: {
          backgroundColor: muiTheme.palette.primary.main,
        },
      },
    }
  )
);

const AppBarCostum = () => {
  const classes = useStyles();

  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.appBarBox}>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Box>
            <Avatar src={Enso} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {loggedInUser && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex" }}
            >
              {loggedInUser?.artistName}
            </Typography>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton size="large" color="inherit">
              {/* <Badge badgeContent={4} color="error"> */}
              <MailIcon />
              {/* </Badge> */}
            </IconButton>
            <MenuCostum logout={logout} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarCostum;
