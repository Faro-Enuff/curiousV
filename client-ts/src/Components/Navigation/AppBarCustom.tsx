import { useContext } from 'react';
// Context Imports
import { AuthContext } from '../../Context/authContext';

// Custom Hooks
import { useFetch } from '../../Utils/useFetch';

// MUI Core Imports
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

// Internal Imports
import MenuCostum from '../AppBar/MenuCostum';

// Import Images
import Enso from '../../Images/Enso.png';

// MUI Icon Imports
import MailIcon from '@mui/icons-material/Mail';

const useStyles = makeStyles((muiTheme) => ({
  appBarBox: {
    top: 0,
    width: '100%',
    maxHeight: '15%',
    position: 'fixed',
    zIndex: 150,
  },
  appBar: {
    minHeight: '15%',
    zIndex: 150,
    MuiPaperRootMuiAppBarRoot: {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
}));

const AppBarCostum = () => {
  const classes = useStyles();

  const { logout } = useContext(AuthContext);

  const { apiData: profile } = useFetch(
    'get',
    'http://localhost:5000/api/users/profile'
  );

  console.log(profile);
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
              sx={{ display: 'flex' }}
            >
              {profile.user.artistName}
            </Typography>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <IconButton href="/chatRoom" size="large" color="inherit">
              {/* <Badge badgeContent={4} color="error"> */}
              <MailIcon />
              {/* </Badge> */}
            </IconButton>
            <MenuCostum
              profileImage={profile?.user.profileImage}
              logout={logout}
            />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarCostum;
