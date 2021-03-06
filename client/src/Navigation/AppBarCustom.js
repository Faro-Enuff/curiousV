import * as React from "react";
import { useContext } from "react";
// Context Imports
import { AuthContext } from "../Context/authContext";

// Custom Hooks
import { useFetch } from "../Utils/useFetch";

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

// React-Router-Dom
import { useHistory } from "react-router-dom";

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
  let history = useHistory();
  const { logout } = useContext(AuthContext);

  const {
    isLoading,
    apiData: profile,
    serverError,
  } = useFetch("get", "http://localhost:5000/api/users/profile");

  const handleClickRedirect = (event) => {
    console.log(event);
    const directory = event.target.id;
    history.push(directory);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.appBarBox}>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Box>
            <Avatar src={Enso} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {profile && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex" }}
            >
              {profile?.user.artistName}
            </Typography>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton href="/chatRoom" size="large" color="inherit">
              {/* <Badge badgeContent={4} color="error"> */}
              <MailIcon />
              {/* </Badge> */}
            </IconButton>
            <MenuCostum profile={profile?.user.profileImage} logout={logout} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarCostum;
