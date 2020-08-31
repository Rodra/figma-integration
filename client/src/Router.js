import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import StyleGuidePage from "./pages/StyleGuidePage/StyleGuidePage";

import { ERROR_URL, STLYE_GUIDE_URL } from "./routes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={STLYE_GUIDE_URL} component={StyleGuidePage} />
      <Route path={ERROR_URL} component={ErrorPage} />
      <Redirect to={STLYE_GUIDE_URL} />
    </Switch>
  </BrowserRouter>
);

export default Router;
