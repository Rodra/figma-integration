import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import ErrorPage from "./pages/ErrorPage";
import StyleGuidePage from "./pages/StyleGuidePage/StyleGuidePage";

import { ERROR_URL, STLYE_GUIDE_URL } from "./routes";

import "./Main.css";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette["bg-inverse"].main,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Box
      id="main"
      className={classes.main}
      style={{ justifyContent: "center" }}
    >
      <Switch>
        <Route exact path={STLYE_GUIDE_URL} component={StyleGuidePage} />
        <Route path={ERROR_URL} component={ErrorPage} />
        <Redirect to={STLYE_GUIDE_URL} />
      </Switch>
    </Box>
  );
};

export default Main;
