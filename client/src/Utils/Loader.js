import Enso from "../Images/Enso.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((muiTheme) => ({
  loaderDiv: {
    position: "fixed",
    zIndex: 99,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: "75px",
    opacity: 0.6,
    transformOrigin: "bottom-center",
    animation: "$spin .8s linear infinite",
  },
  "@global": {
    "@keyframes spin": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderDiv}>
      <img src={Enso} alt="Loading..." className={classes.loader} />
    </div>
  );
};

export default Loader;
