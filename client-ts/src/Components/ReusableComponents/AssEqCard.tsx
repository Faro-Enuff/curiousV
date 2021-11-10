import { FC } from 'react';
import {
  Button,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { format, formatDistanceToNow } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Enso from '../../Images/Enso.png';

interface Props {
  header: string;
  body: any;
}

const CustomizedCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 3px 1px 4px 4px #e0f7fa;
  background-image: url(${Enso});
  background-size: 1000px;
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
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '200px',
    backgroundImage: `url(${Enso})`,
  },
}));

const AssEqCard: FC<Props> = ({ header, body }) => {
  const classes = useStyles();
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
                    <CardActionArea>
                      <div className={classes.heading}>
                        <Typography variant="h6" key={key}>
                          {b.assignmentTitle}
                        </Typography>
                      </div>
                      <CardActions>
                        <Button variant="outlined" size="small" color="primary">
                          Comment
                        </Button>
                        <Button variant="outlined" size="small" color="primary">
                          See Details
                        </Button>
                        <Button variant="outlined" size="small" color="primary">
                          Share
                        </Button>
                      </CardActions>
                      <CardContent>
                        <div className={classes.cardContent}>
                          <ul>
                            <li>
                              <Typography variant="body1">
                                {formatDistanceToNow(Date.parse(b.endDate))}{' '}
                                left
                              </Typography>
                            </li>
                            {/* <li>
                              <Typography variant="body1">
                                Start:{' '}
                                {format(
                                  Date.parse(b.startDate),
                                  'dd. MMMM yyyy'
                                )}
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="body1">
                                End:{' '}
                                {format(Date.parse(b.endDate), 'dd. MMMM yyyy')}
                              </Typography>
                            </li> */}
                          </ul>
                        </div>
                      </CardContent>
                      {/* <CardMedia
                        component="img"
                        height="60"
                        image={Enso}
                        alt="enso"
                      /> */}
                    </CardActionArea>
                  </CustomizedCard>
                </div>
              );
            })}
          <Card>
            <Typography variant="body1"></Typography>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default AssEqCard;
