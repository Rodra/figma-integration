import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Box from "@material-ui/core/Box";

import ErrorPage from "./pages/ErrorPage";
import StyleGuidePage from "./pages/StyleGuidePage/StyleGuidePage";

import { ERROR_URL, STLYE_GUIDE_URL } from "./routes";

import "./Main.css";

const Main = () => (
  <Box id="main" style={{ justifyContent: "center" }}>
    <BrowserRouter>
      <Switch>
        <Route exact path={STLYE_GUIDE_URL} component={StyleGuidePage} />
        <Route path={ERROR_URL} component={ErrorPage} />
        <Redirect to={STLYE_GUIDE_URL} />
      </Switch>
    </BrowserRouter>
  </Box>
);

export default Main;
