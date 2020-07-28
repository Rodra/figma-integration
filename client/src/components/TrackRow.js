import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

import { ReactComponent as AlbumIcon } from "../assets/album.svg";

import Typography from "./Typography";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 0,
    marginBottom: "5px",
    textDecoration: "none",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 0,
    marginRight: theme.spacing(2),
    backgroundColor: "transparent",
    borderRadius: "10%",
  },
  icon: {
    width: "1em",
    height: "1em",
  },
  name: {
    margin: 0,
  },
  album: {
    display: "block",
  },
  textRight: {
    textAlign: "right",
  },
  duration: {
    letterSpacing: "0.05em",
    fontWeight: 300,
    marginRight: theme.spacing(2),
  },
  default: {
    color: `${theme.palette["bg-default"].main}`
  }
}));

const TrackRow = ({ href, name, album, duration }) => {
  const classes = useStyles();
  const image = album.images.slice(-1)[0];

  return (
    <ListItem
      className={classes.item}
      component={Link}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      data-testid="track-row"
    >
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          alt={album.name}
          src={(image && image.url) || ""}
          data-testid="track-avatar"
        >
          <AlbumIcon className={classes.icon} data-testid="album-icon" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            className={clsx(classes.name, classes.default)}
            figma={"figma-typography-text-1"}
            data-testid="track-album-name"
          >
            {name}
          </Typography>
        }
        secondary={
          <Typography
            className={clsx(classes.album, classes.default)}
            figma={"figma-typography-text-2"}
            data-testid="track-album-name"
          >
            {album.name}
          </Typography>
        }
        data-testid="track-name"
      />
      <ListItemText
        className={classes.textRight}
        primary={
          <Typography
            className={clsx(classes.duration, classes.default)}
            figma={"figma-typography-text-2"}
          >
            {duration}
          </Typography>
        }
        data-testid="track-duration"
      />
    </ListItem>
  );
};

TrackRow.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  duration: PropTypes.string.isRequired,
};

TrackRow.defaultProps = {
  album: {
    images: [],
  },
};

export default TrackRow;