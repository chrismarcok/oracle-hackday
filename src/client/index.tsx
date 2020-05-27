import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import {DashboardPage} from "./pages/DashboardPage";
import { PostPage } from "./pages/PostPage";

import "./scss/app";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/post" component={PostPage} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
