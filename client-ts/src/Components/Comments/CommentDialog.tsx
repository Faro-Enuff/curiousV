import { FC, useState } from 'react';
// MUI Imports
import {
  Button,
  DialogContent,
  Typography,
  IconButton,
  Fade,
  Modal,
  Box,
  Backdrop,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@material-ui/core/styles';
// Internatl Imports
import Comments from '../../Views/Comments';

interface Props {
  input: any;
}

const style = {
  position: 'absolute' as 'absolute',
  zIndex: 3,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  backgroundColor: '#f3e5f5',
};

const useStyles = makeStyles((muiTheme) => ({
  iconBtnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4%',
  },
  contentDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CommentDialog: FC<Props> = ({ input }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('Comment Dialog : >> ', input);
  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        color="secondary"
        onClick={handleOpen}
        className={classes.btn}
      >
        Comment
      </Button>
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
          <Box sx={style}>
            <div className={classes.iconBtnRow}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className={classes.heading}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: '3%' }}
              >
                Comments
              </Typography>
              <Box sx={{ mt: 1, mb: 1, width: '75%' }}>
                <hr className="beautyHrSwitched" />
              </Box>
              <Typography
                sx={{ textAlign: 'center' }}
                variant="h4"
                color="primary"
              >
                {input && input.assignmentTitle}
              </Typography>
            </div>
            <DialogContent className={classes.contentDiv}>
              <Comments input={input} />
            </DialogContent>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CommentDialog;
