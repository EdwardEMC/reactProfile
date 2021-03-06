import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/utils/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import "./style.css";

// Making so the navbar does not appear on the hero page
const NavRoutes = () => {
  return (
    <div className="App Site">
      {/* <Header /> */}
      <div className="Site-content">
        <NavBar />
        <Header />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NoMatch} />
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route component={NavRoutes} />
      </Switch>
    </Router>
  );
}

export default App;