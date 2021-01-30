import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Landing from "./pages/landing";
import About from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";
import Tools from "./pages/tools";
import LandingCovid from "./projects/covid/pages/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Works} />
          <Route exact path="/work/covidtracker" component={LandingCovid} />
          <Route exact path="/tools" component={Tools} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
