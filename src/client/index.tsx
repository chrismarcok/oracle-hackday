import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import {DashboardPage} from "./pages/DashboardPage";
import "./scss/app";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
