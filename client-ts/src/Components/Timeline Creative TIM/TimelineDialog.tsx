import { useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import { TimelineCreation } from '../../Interfaces/interfaces';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  height: 500,
  borderRadius: '20px',
  bgcolor: '#fff',
  border: '1px solid #c0b3c2',
  boxShadow: '3px 1px 4px 4px #e0f7fa',
  p: 4,
};

const useStyles = makeStyles(() => ({
  dialogFrame: {
    maxWidth: '100%',
  },
  creationImage: {
    width: '200px',
    height: 'auto',
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <img
              className={classes.creationImage}
              src={creationData[0].creationFile}
              alt="Creation"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TimelineModal;
