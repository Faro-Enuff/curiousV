import { FC } from 'react';

// MUI Core Imports
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

// MUI Icon Imports
import HomeMiniIcon from '@mui/icons-material/HomeMini';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';

const useStyles = makeStyles({
  bottomNav: {
    bottom: 0,
    position: 'fixed',
  },
});

interface Props {}

const BottomNavigationCustom: FC = (props: Props) => {
  const classes = useStyles();

  return (
    <BottomNavigation
      sx={{ width: '100%' }}
      className={classes.bottomNav}
      showLabels
      component={BottomNavigation}
    >
      <BottomNavigationAction
        href="/createSummon"
        icon={<AssignmentIcon color="secondary" />}
      />
      <BottomNavigationAction
        href="/"
        icon={<HomeMiniIcon color="secondary" />}
      />
      <BottomNavigationAction
        href="/userSearch"
        icon={<SearchIcon color="secondary" />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationCustom;
