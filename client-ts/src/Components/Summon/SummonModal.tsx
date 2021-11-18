import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../../Utils/Loader';
import YoutubeEmbed from '../ReusableComponents/YoutubeEmbed';
import { Summon } from '../../Interfaces/interfaces';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Utils/useFetch';
import CloseIcon from '@mui/icons-material/Close';
import CommentDialog from '../Comments/CommentDialog';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 600,
  borderRadius: '20px',
  bgcolor: '#fff',
  boxShadow: '3px 1px 4px 4px #87A8A4',
  p: 2,
};

const useStyles = makeStyles({
  dialogFrame: {
    maxHeight: '100%',
    overflow: 'hidden',
    boxShadow: '3px 1px 4px 4px #87A8A4',
  },
  modalContent: {
    minHeight: '40%',
    maxHeight: '500px',
    overflow: 'auto',
    marginBottom: '5%',
  },
  modalHeading: {
    maxHeight: '60%',
    minHeight: '20%',
  },
});
interface Props {
  input: boolean;
  setInput: any;
  body: Summon;
}

const SummonModal: FC<Props> = ({ input, setInput, body }) => {
  const classes = useStyles();
  let history = useHistory();

  const { isLoading, apiData: creation } = useFetch(
    'get',
    `http://localhost:5000/api/creations/getSummonCreationUser/${body?._id}`
  );

  let embedId: string = body?.learningMaterial.substring(
    body?.learningMaterial.indexOf('=') + 1
  );

  // console.log('Summon Modal Body : >> ', body);
  // console.log('Creation : >>', creation);

  return (
    <div>
      {isLoading && <Loader />}
      <Modal
        open={input}
        onClose={setInput}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={input}>
          <Box className={classes.dialogFrame} sx={style}>
            <div className={classes.modalHeading}>
              <Typography variant="h3">{body?.assignmentTitle}</Typography>
              <Typography variant="h6">
                Summon Author: {body?.author?.artistName}
              </Typography>
              <Box sx={{ mt: 4, mb: 4 }}>
                <hr className="beautyHr" />
              </Box>
            </div>
            <div className={classes.modalContent}>
              <YoutubeEmbed embedId={embedId} />
              <Box sx={{ mt: 2 }}>
                <CommentDialog input={body} />
              </Box>
              <Box sx={{ mt: 2, mb: 4 }}>
                <ul>
                  <li>
                    <Typography variant="h6">Time Frame</Typography>
                    <Typography variant="body1">
                      {body &&
                        `Start:    ${format(
                          Date.parse(String(body?.startDate)),
                          'dd. MMMM yyyy'
                        )}`}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      {body &&
                        `End:    ${format(
                          Date.parse(String(body?.endDate)),
                          'dd. MMMM yyyy'
                        )}`}
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box
                sx={{
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {creation?.userCreation?.length < 1 ? (
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/creationSubmit/${body?._id}`}
                  >
                    <Button variant="contained">CREATE</Button>
                  </Link>
                ) : (
                  <IconButton edge="start" color="secondary" onClick={setInput}>
                    <CloseIcon />
                  </IconButton>
                )}
              </Box>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SummonModal;
