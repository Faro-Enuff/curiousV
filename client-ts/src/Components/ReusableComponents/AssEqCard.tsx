import { FC, useState } from 'react';
import {
  Button,
  Card,
  Box,
  Typography,
  CardContent,
  CardActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { formatDistanceToNow } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import SummonModal from '../Summon/SummonModal';
import { Summon } from '../../Interfaces/interfaces';
import Enso from '../../Images/Enso.png';

interface Props {
  header: string;
  body: any;
}

const CustomizedCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 2px 2px 4px 4px #d5c4d1;
`;

const useStyles = makeStyles((muiTheme) => ({
  outerCard: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '300px',
  },

  innerCardsDiv: {},
  summonCards: {
    marginTop: '3%',
    marginBottom: '3%',
    padding: '5%',
  },
  heading: {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    textAlign: 'center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    backgroundImage: `url(${Enso})`,
  },
  btnRow: {
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AssEqCard: FC<Props> = ({ header, body }) => {
  const classes = useStyles();

  const [summon, setSummon] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (b: Summon): void => {
    setSummon(b);
    setOpen(true);
  };
  const handleClose = (): void => setOpen(false);

  console.log(body);
  return (
    <div className={classes.outerCard}>
      <div className={classes.innerCardsDiv}>
        <Card>
          {body &&
            body.map((b: any | number, key: number) => {
              return (
                <div className={classes.summonCards} key={key}>
                  <CustomizedCard>
                    <div className={classes.heading}>
                      <Typography variant="h6">{b.assignmentTitle}</Typography>
                    </div>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <hr className="beautyHrSmall" />
                    </Box>
                    <CardActions className={classes.btnRow}>
                      <Button variant="outlined" size="small" color="secondary">
                        Comment
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => handleClick(b)}
                      >
                        See Details
                      </Button>
                      <Button variant="outlined" size="small" color="secondary">
                        Share
                      </Button>
                    </CardActions>
                    <CardContent>
                      <div className={classes.cardContent}>
                        <ul>
                          <li>
                            <Typography variant="body1">
                              {formatDistanceToNow(Date.parse(b.endDate))} left
                            </Typography>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </CustomizedCard>
                </div>
              );
            })}
        </Card>
      </div>
      <SummonModal input={open} setInput={handleClose} body={summon} />
    </div>
  );
};

export default AssEqCard;
