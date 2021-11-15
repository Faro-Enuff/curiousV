import { FC } from 'react';
// Internal Imports
import Enso from '../Images/EnsoTransparent.png';
// MUI imports
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((muiTheme) => ({
  backgroundImageDiv: {
    opacity: 1,
    height: '15%',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  backgroundImageDivSec: {
    opacity: 1,
    height: '15%',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: 'auto',
    zIndex: 1,
  },
}));
interface Props {}

const BackgroundImageApp: FC<Props> = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImageDiv}>
      <img className={classes.backgroundImage} src={Enso} alt="Enso" />
    </div>
  );
};

export default BackgroundImageApp;
