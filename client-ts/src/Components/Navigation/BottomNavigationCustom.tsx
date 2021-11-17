import { FC } from 'react';

// MUI Core Imports
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';

// MUI Icon Imports
import HomeMiniIcon from '@mui/icons-material/HomeMini';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';

const CustomizedBottomNavigation = styled(BottomNavigation)`
  border-radius: 25px;
  margin-left: 10px;
  margin-bottom: 5%;
  margin-right: 10px;
  box-shadow: 3px 1px 4px 4px #f3e5f5;
`;

const useStyles = makeStyles({
  navBackground: {
    zIndex: 150,
    maxWidth: '100%',
    minWidth: '95%',
  },
  bottomNav: {},
});

interface Props {}

const BottomNavigationCustom: FC = (props: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.navBackground}>
      <CustomizedBottomNavigation
        sx={{ width: '100%' }}
        className={classes.bottomNav}
        showLabels
      >
        <BottomNavigationAction
          href="/createSummon"
          icon={<AssignmentIcon color="primary" />}
        />
        <BottomNavigationAction
          href="/"
          icon={<HomeMiniIcon color="primary" />}
        />
        <BottomNavigationAction
          href="/userSearch"
          icon={<SearchIcon color="primary" />}
        />
      </CustomizedBottomNavigation>
    </Box>
  );
};

export default BottomNavigationCustom;
