import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Loader from "../components/Loader";
import Typography from "../components/Typography";

const useStyles = makeStyles((theme) => ({
  default: {
    color: `${theme.palette["bg-default"].main}`,
  },
}));

export const ErrorPage = ({ isLoading, error }) => {
  const classes = useStyles();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box data-testid="error-page">
      <Typography
        figma={"figma-typography-text-1"}
        className={clsx(classes.default)}
        data-testid="error-message"
      >
        {error.message}
      </Typography>
    </Box>
  );
};

const mapStateToProps = ({ root: { isLoading, error } }) => ({
  isLoading,
  error,
});

export default connect(mapStateToProps)(ErrorPage);
