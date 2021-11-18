import React, { FC, useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// @material-ui/core components
import { Avatar, Dialog } from '@mui/material';
import Badge from './Badge';
import { makeStyles } from '@material-ui/core/styles';
// import Enso from '../../Images/Enso.png';
import { TimelineCreation } from '../../Interfaces/interfaces';
// core components
import { useFetch } from '../../Utils/useFetch';
import { fillArray } from '../Timeline Creative TIM/Creations';

import styles from './TimelineStyle';
import TimelineDialog from './TimelineDialog';

interface Props {
  creations: any;
  simple?: any;
}

const useStyles = makeStyles<any | undefined>(styles);

const Timeline: FC<Props> = (props) => {
  const { creations, simple } = props;
  const classes = useStyles();

  const [creationsArray, setCreationsArray] = useState<TimelineCreation[] | []>(
    []
  );
  const [creation, setCreation] = useState<any>();

  useEffect(() => {
    if (creations) {
      const array = fillArray(creations.userCreations);
      setCreationsArray(array);
      console.log('Creations Array : >>', array);
    }
  }, [creations]);

  console.log('Creations : >>', creations);

  const timelineClass =
    classes.timeline +
    ' ' +
    cx({
      [classes.timelineSimple]: simple,
    });

  const [open, setOpen] = useState(false);

  const handleOpen = (p: any): void => {
    setOpen(true);
    setCreation(p);
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };

  return (
    <div className={classes.timeline}>
      <ul className={timelineClass}>
        {creationsArray.map((prop: any, key: number) => {
          const panelClasses =
            classes.timelinePanel +
            ' ' +
            cx({
              [classes.timelinePanelInverted]: prop.inverted || simple,
              [classes.timelineSimplePanel]: simple,
            });
          const timelineBadgeClasses =
            classes.timelineBadge +
            ' ' +
            classes[prop.badgeColor] +
            ' ' +
            cx({
              [classes.timelineSimpleBadge]: simple,
            });
          return (
            <li className={classes.item} key={key}>
              {prop.Avatar ? (
                <div
                  onClick={() =>
                    handleOpen(
                      creations.userCreations.filter(
                        (creation: any) =>
                          creation.summon.assignmentTitle === prop.title
                      )
                    )
                  }
                >
                  <Avatar className={timelineBadgeClasses} src={prop.Avatar} />
                </div>
              ) : null}
              <div className={panelClasses}>
                {prop.title ? (
                  <div className={classes.timelineHeading}>
                    <Badge color={prop.titleColor}>{prop.title}</Badge>
                  </div>
                ) : null}
                <div className={classes.timelineBody}>{prop.body}</div>
                {prop.footerTitle ? (
                  <h6 className={classes.footerTitle}>{prop.footerTitle}</h6>
                ) : null}
                {prop.footer ? <hr className={classes.footerLine} /> : null}
                {prop.footer ? (
                  <div className={classes.timelineFooter}>{prop.footer}</div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <div className={classes.assignmentClasses}>
        <TimelineDialog
          open={open}
          handleClose={handleClose}
          creationData={creation}
        />
      </div>
    </div>
  );
};

export default Timeline;

Timeline.propTypes = {
  simple: PropTypes.bool,
};
