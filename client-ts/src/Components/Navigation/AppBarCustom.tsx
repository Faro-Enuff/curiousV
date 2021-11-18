import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
  color: #87a8a4;
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
    boxShadow: '1px 1px 3px 3px  #87A8A4',
  },
}));

const AppBarCostum = () => {
  const classes = useStyles();
  let history = useHistory();

  const { logout } = useContext(AuthContext);

  const { apiData: profile } = useFetch(
    'get',
    'http://localhost:5000/api/users/profile'
  );

  const handleClick = () => {
    history.push('/editProfile');
  };

  // console.log(profile);
  return (
    <div className={classes.appBarBox}>
      <Box sx={{ flexGrow: 1 }} className={classes.appBar}>
        <CustomizedAppBar position="static" color="primary">
          <Toolbar>
            <div onClick={handleClick}>
              <Avatar
                sx={{ height: 48, width: 48, mr: 2 }}
                className={classes.avatarFrame}
                src={
                  profile?.user.profileImage ? profile.user.profileImage : Enso
                }
              />
            </div>
            <Box sx={{ flexGrow: 1 }} />
            {profile && (
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: 'flex' }}
              >
                {`${profile.user.artistName}`}
              </Typography>
            )}
            {profile && (
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: 'flex' }}
              >
                {`' | ${
                  profile.user.hobbies[0]?.genre
                    ? profile.user.hobbies[0]?.genre
                    : ''
                } cV`}
              </Typography>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' }}>
              {/* <IconButton href="/chatRoom" size="large" color="inherit">
                <Badge badgeContent={4} color="error">
                <MailIcon />
                </Badge>
              </IconButton> */}
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
