import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Enso from "../Images/Enso.png";

const useStyles = makeStyles((muiTheme) => ({
  successText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImageDiv: {
    position: "absolute",
    width: "100%",
    overflow: "hidden",
  },
  backgroundImage: {
    bottom: "25%",
    left: "60%",
    width: "250px",
    opacity: 0.1,
  },
}));

const GoogleSuccess = () => {
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return (
    <div className={classes.successText}>
      <div className={classes.backgroundImageDiv}>
        <img src={Enso} className={classes.backgroundImage} />
      </div>
      <Typography variant="h6">Successfully Signed In</Typography>
    </div>
  );
};

export default GoogleSuccess;
