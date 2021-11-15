import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import Enso from '../../Images/EnsoTransparent.png';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  height: 500,
  borderRadius: '20px',
  bgcolor: '#fff',
  boxShadow: '3px 1px 4px 4px #87A8A4',
  p: 6,
};

const useStyles = makeStyles((muiTheme) => ({
  dialogFrame: {
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  creationImageDiv: {
    position: 'absolute',
    height: '100%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 20,
    right: '5%',
    top: 0,
    bottom: 0,
  },
  titleRow: {
    fontWeight: 'bold',
    color: '#986D8E',
    margin: '5%',
    padding: 5,
    height: '80px',
    minWidth: '100%',
    backgroundColor: 'transparent',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
  },
  imageRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  btnRow: {
    margin: '5%',
    height: '50px',
    width: '60%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
  },
  creationImage: {
    zIndex: 120,
    width: '240px',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
  },
  image: {
    width: '600px',
    opacity: 0.4,
    height: 'auto',
    maxHeight: '100vh',
    zIndex: 100,
  },
  backgroundImageDiv: {
    opacity: 1,
    maxWidth: '90%',
    height: '150px',
    zIndex: 1,
    position: 'absolute',
    top: 0,
  },
}));
interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  creationData: any[];
}

const TimelineModal: FC<Props> = ({
  open,
  handleOpen,
  handleClose,
  creationData,
}) => {
  const classes = useStyles();
  console.log(creationData);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.dialogFrame} sx={style}>
            <div className={classes.creationImageDiv}>
              <div className={classes.titleRow}>
                <Typography variant="h5">
                  {creationData[0].summon.assignmentTitle}
                </Typography>
              </div>
              <div className={classes.imageRow}>
                <img
                  className={classes.creationImage}
                  src={creationData[0].creationFile}
                  alt="Creation"
                />
              </div>
              <div className={classes.btnRow}>
                <Button variant="outlined" color="secondary" size="small">
                  Comment
                </Button>
                <Button variant="contained" color="secondary" size="small">
                  Share
                </Button>
              </div>
            </div>
            <div className={classes.backgroundImageDiv}>
              <img src={Enso} alt="Enso Background" className={classes.image} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TimelineModal;
