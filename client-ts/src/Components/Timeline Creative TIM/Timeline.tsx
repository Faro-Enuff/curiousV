import React, { FC, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// @material-ui/core components
import { Avatar, Dialog } from '@mui/material';
import Badge from './Badge';
import { makeStyles } from '@material-ui/core/styles';
// import Enso from '../../Images/Enso.png';

// core components

import styles from './TimelineStyle';
import TimelineDialog from './TimelineDialog';

interface Props {
  Summons: any;
  simple?: any;
}

const useStyles = makeStyles<any | undefined>(styles);

const Timeline: FC<Props> = (props) => {
  const { Summons, simple } = props;
  const classes = useStyles();

  const timelineClass =
    classes.timeline +
    ' ' +
    cx({
      [classes.timelineSimple]: simple,
    });

  const [open, setOpen] = useState(false);

  const handleOpen: () => void = () => {
    setOpen(true);
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };

  return (
    <div className={classes.timeline}>
      <ul className={timelineClass}>
        {Summons.map((prop: any, key: number) => {
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
                <div onClick={handleOpen}>
                  <Avatar className={timelineBadgeClasses} src={prop.Avatar} />
                </div>
              ) : null}
              {open ? (
                <div className={classes.assignmentClasses}>
                  <TimelineDialog
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                  />
                  {/* <Dialog open={open} className={classes.assignmentDialog}>
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
                </Dialog> */}
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
    </div>
  );
};

export default Timeline;

Timeline.propTypes = {
  Summons: PropTypes.arrayOf(PropTypes.object).isRequired,
  simple: PropTypes.bool,
};
