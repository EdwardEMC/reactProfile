import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/utils/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

// Making so the navbar does not appear on the hero page
const NavRoutes = () => {
  return (
    <div>
      <NavBar/>
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={NoMatch} />
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route component={NavRoutes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;