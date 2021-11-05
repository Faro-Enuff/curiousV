import React, { FC, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TransitionProps } from '@mui/material/transitions';
// Internal Imports

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Core Imports
import {
  Slide,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  IconButton,
} from '@mui/material';

const useStyles = makeStyles(() => ({
  dialog: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
  },
  popup: {
    position: 'absolute',
    bottom: 0,
    minwidth: '100%',
    minHeight: '90%',
    margin: 0,
    color: '#fff',
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const TimelineDialog: FC<Props> = ({ open, handleOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.dialog}>
      {/* <Box borderRadius={5} boxShadow={3}>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          size="large"
          className={classes.btn}
        >
          Diet
        </Button>
      </Box> */}
      <IconButton
        edge="start"
        color="secondary"
        onClick={handleClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Dialog
        open={open}
        fullWidth={true}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.popup }}
      >
        <DialogTitle id="form-dialog-title">Summon to Create:</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TimelineDialog;
