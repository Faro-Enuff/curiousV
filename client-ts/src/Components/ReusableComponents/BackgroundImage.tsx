import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import Enso from '../../Images/EnsoTransparent.png';

interface Props {}

const useStyles = makeStyles((muiTheme) => ({
  image: {
    width: '300px',
    height: 'auto',
    maxHeight: '100vh',
    zIndex: 100,
  },
  backgroundImageTopDiv: {
    opacity: 0.6,
    height: '150px',
    zIndex: 1,
    position: 'absolute',
    top: 0,
  },
  backgroundImageDiv: {
    backgroundImage: `url(${Enso})`,
    opacity: 0.6,
    zIndex: 1,
    position: 'absolute',
    height: '16.1%',
    maxHeight: '100vh',
    overflow: 'hidden',
  },
}));

const BackgroundImage = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.backgroundImageTopDiv}>
        <img className={classes.image} src={Enso} alt="Enso" />
      </div>
      <div className={classes.backgroundImageDiv}>
        <img className={classes.image} src={Enso} alt="Enso" />
      </div>
    </div>
  );
};

export default BackgroundImage;
