import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  whiteColor,
} from './material-dashboard-pro-react';

const badgeStyle: any = {
  badge: {
    borderRadius: '40px',
    padding: '5px 12px',
    textTransform: 'uppercase',
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '1',
    color: whiteColor,
    textAlign: 'center',
    verticalAlign: 'baseline',
    display: 'inline-block',
  },
  primary: {
    backgroundColor: primaryColor[0],
  },
  warning: {
    backgroundColor: warningColor[0],
  },
  danger: {
    backgroundColor: dangerColor[0],
  },
  success: {
    backgroundColor: '#D9CAB3',
  },
  info: {
    backgroundColor: infoColor[0],
  },
  rose: {
    backgroundColor: '#D9CAB3',
  },
  gray: {
    backgroundColor: grayColor[0],
  },
};

export default badgeStyle;
