/*eslint-disable*/
import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import styles from "../extras/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/abxsantos?tab=repositories"
                className={classes.block}
                target="_blank"
              >
                <GitHubIcon className={classes.icon} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/alexandrebxs/"
                className={classes.block}
                target="_blank"
              >
                <LinkedInIcon className={classes.icon} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:ale.bxsantos@gmail.com"
                className={classes.block}
                target="_blank"
              >
                <EmailIcon className={classes.icon} />
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <FreeBreakfastIcon className={classes.icon} /> by Alexandre Xavier for
          an open-source science.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
