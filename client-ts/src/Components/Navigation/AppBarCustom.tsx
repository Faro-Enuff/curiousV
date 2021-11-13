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
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

// Internal Imports
import MenuCostum from '../AppBar/MenuCostum';

// Import Images
import Enso from '../../Images/EnsoTransparent.png';

// MUI Icon Imports
import MailIcon from '@mui/icons-material/Mail';

const CustomizedAppBar = styled(AppBar)`
  background-color: #fafafa;
  color: #e085c2;
  box-shadow: 3px 1px 4px 4px #f3e5f5;
`;

const useStyles = makeStyles((muiTheme) => ({
  appBarBox: {
    width: '100%',
    zIndex: 150,
  },
  appBar: {
    minHeight: '15%',
    zIndex: 150,
    MuiPaperRootMuiAppBarRoot: {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
  avatarFrame: {
    boxShadow: '1px 1px 3px 3px  #e085c2',
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
    <div className={classes.appBarBox}>
      <Box sx={{ flexGrow: 1 }} className={classes.appBar}>
        <CustomizedAppBar position="static" color="primary">
          <Toolbar>
            <div>
              <Avatar
                className={classes.avatarFrame}
                src={
                  profile?.user.profileImage ? profile.user.profileImage : Enso
                }
              />
            </div>
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
        </CustomizedAppBar>
      </Box>
    </div>
  );
};

export default AppBarCostum;
