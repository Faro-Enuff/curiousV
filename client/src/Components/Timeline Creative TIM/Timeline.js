import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { Avatar, Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Enso from "../../Images/Enso.png";

// core components
import Badge from "./Badge";

import styles from "./timelineStyle";

const useStyles = makeStyles(styles);

export default function Timeline(props) {
  const classes = useStyles();
  const { stories, simple } = props;
  const timelineClass =
    classes.timeline +
    " " +
    cx({
      [classes.timelineSimple]: simple,
    });
  return (
    <ul className={timelineClass}>
      {stories.map((prop, key) => {
        const panelClasses =
          classes.timelinePanel +
          " " +
          cx({
            [classes.timelinePanelInverted]: prop.inverted || simple,
            [classes.timelineSimplePanel]: simple,
          });
        const timelineBadgeClasses =
          classes.timelineBadge +
          " " +
          classes[prop.badgeColor] +
          " " +
          cx({
            [classes.timelineSimpleBadge]: simple,
          });
        return (
          <li className={classes.item} key={key}>
            {prop.Avatar ? (
              <div>
                <Avatar className={timelineBadgeClasses} src={prop.Avatar} />
              </div>
            ) : null}
            {prop.Assignment ? (
              <div className={classes.assignmentClasses}>
                <Dialog className={classes.assignmentDialog}>
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
                </Dialog>
              </div>
            ) : null}
            {/* <div className={panelClasses}>
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
            </div> */}
          </li>
        );
      })}
    </ul>
  );
}

Timeline.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  simple: PropTypes.bool,
};
