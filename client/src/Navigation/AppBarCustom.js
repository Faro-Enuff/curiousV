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
  MenuItem,
  Menu,
} from "@mui/material";

import { makeStyles } from "@mui/material/styles";

// MUI Icon Imports
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";

const AppBarCostum = () => {
  const { loggedInUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "flex" }}
          >
            {loggedInUser?.artistName}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton size="large" color="inherit">
              {/* <Badge badgeContent={4} color="error"> */}
              <MailIcon />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default AppBarCostum;
