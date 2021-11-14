import React, { FC } from 'react';
import { styled, Box } from '@mui/system';
import { Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../../Utils/Loader';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import YoutubeEmbed from '../ReusableComponents/YoutubeEmbed';
import { Summon } from '../../Interfaces/interfaces';
import { Link } from 'react-router-dom';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  background-color: #c0b3c2;
  z-index: 100;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: 100;
  position: fixed;
  right: 15;
  bottom: 15;
  top: 15;
  left: 15;
`;

const useStyles = makeStyles({
  modal: {
    maxHeight: '100%',
    overflow: 'hidden',
  },
  modalContent: {
    minHeight: '40%',
    maxHeight: '300px',
    overflow: 'auto',
    marginBottom: '5%',
  },
  modalHeading: {
    maxHeight: '60%',
    minHeight: '20%',
  },
});

const style = {
  maxWidth: '80%',
  height: '70%',
  bgcolor: '#fff',
  borderRadius: '20px',
  p: 3,
  px: 3,
  pb: 3,
};

interface Props {
  input: boolean;
  setInput: any;
  body: Summon;
}
interface Dates {
  startDate: Date;
  endDate: Date;
}

const SummonModal: FC<Props> = ({ input, setInput, body }) => {
  const classes = useStyles();

  let embedId: string = body?.learningMaterial.substring(
    body?.learningMaterial.indexOf('=') + 1
  );

  // const [dates, setDates] = useState<Dates>({
  //   startDate: body?.startDate,
  //   endDate: body?.endDate,
  // });

  // let startDate: string = format(new Date(body?.startDate), 'dd. MMMM yyyy');
  // let endDate: string = format(new Date(body?.endDate), 'dd. MMMM yyyy');

  console.log(body);

  return (
    <div>
      {body && <Loader />}
      <StyledModal open={input} onClose={setInput} BackdropComponent={Backdrop}>
        <Box sx={style} className={classes.modal}>
          <div className={classes.modalHeading}>
            <Typography variant="h3">{body?.assignmentTitle}</Typography>
            <Typography variant="h6">{body?.author}</Typography>
            <Box sx={{ mt: 4, mb: 4 }}>
              <hr className="beautyHr" />
            </Box>
          </div>
          <div className={classes.modalContent}>
            <YoutubeEmbed embedId={embedId} />
            <Box sx={{ mt: 4, mb: 4 }}>
              <ul>
                <li>
                  <Typography variant="h6">Time Frame</Typography>
                  <Typography variant="body1">
                    Start:
                    {}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    End:
                    {}
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link
                style={{ textDecoration: 'none' }}
                to={`/creationSubmit/${body?._id}`}
              >
                <Button variant="contained">CREATE</Button>
              </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={setInput}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
};

export default SummonModal;
