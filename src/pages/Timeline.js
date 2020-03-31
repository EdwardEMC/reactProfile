import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TimelineInfo from "../components/TimelineInfo";

class Timeline extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
          <TimelineInfo />
        <Footer />
      </Wrapper>
    )
  }
}

export default Timeline;