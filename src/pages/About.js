import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
          <AboutMe />
        <Footer />
      </Wrapper>
    )
  }
}

export default About;