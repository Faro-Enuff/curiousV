import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@mui/styles";

import styles from "./badgeStyle";

const useStyles = makeStyles(styles);

export default function Badge(props) {
  const { color, children } = props;
  const classes = useStyles();
  return (
    <span className={classes.badge + " " + classes[color]}>{children}</span>
  );
}

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  children: PropTypes.node,
};
