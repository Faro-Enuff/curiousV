import React, { FC, useEffect } from 'react';
// Import MUI
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import Enso from '../../Images/Enso.png';

interface Props {}
const useStyles = makeStyles((muiTheme) => ({
  successText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageDiv: {
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
  },
  backgroundImage: {
    bottom: '25%',
    left: '60%',
    width: '250px',
    opacity: 0.1,
  },
}));
// TODO CSS Styling needs to be done in a better way => allocation of circle an message
const GoogleSuccess: FC = (props: Props) => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);

  return (
    <div className={classes.successText}>
      <div className={classes.backgroundImageDiv}>
        <img
          src={Enso}
          className={classes.backgroundImage}
          alt="Successful Login"
        />
      </div>
      <Typography variant="h6">Successfully Signed In</Typography>
    </div>
  );
};

export default GoogleSuccess;
