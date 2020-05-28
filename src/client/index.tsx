import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import {DashboardPage} from "./pages/DashboardPage";
import { PostPage } from "./pages/PostPage";

import "./scss/app";

//Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  faCheckSquare,
  faCoffee,
  faSignInAlt,
  faSearch,
  faUser,
  faInfo,
  faInfoCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faTrash,
  faUndo,
  faSave,
  faExpandArrowsAlt,
  faFont,
  faPencilAlt,
  faCheck,
  faArrowRight,
  faArrowLeft,
  faKeyboard,
  faEraser,
  faGripVertical,
  faQuestionCircle,
  faQuestion,
  faEnvelope,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "./comps/ojet/Header";
import { Footer } from "./comps/ojet/Footer";

const myLibrary: any = library;
myLibrary.add(
  fab,
  faCheckSquare,
  faCoffee,
  faSignInAlt,
  faSearch,
  faUser,
  faInfo,
  faInfoCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faTrash,
  faUndo,
  faSave,
  faExpandArrowsAlt,
  faFont,
  faPencilAlt,
  faCheck,
  faArrowRight,
  faArrowLeft,
  faKeyboard,
  faEraser,
  faGripVertical,
  faQuestionCircle,
  faQuestion,
  faEnvelope,
  faCaretUp,
  faCaretDown
);

render(
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/post/:postID" component={PostPage} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
    <Footer/>
  </>,
  document.getElementById("root")
);
