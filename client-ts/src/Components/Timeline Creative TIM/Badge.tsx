import React, { FC } from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from './badgeStyle';

const useStyles = makeStyles(styles);

interface Props {
  color: any;
  children: any;
}

const Badge: FC<Props> = ({ color, children }) => {
  const classes = useStyles();
  return (
    <span className={classes.badge + ' ' + classes[color]}>{children}</span>
  );
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  children: PropTypes.node,
};

export default Badge;
