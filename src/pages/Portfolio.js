import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioPage from "../components/PortfolioPage";

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
          <PortfolioPage />
        <Footer />
      </Wrapper>
    )
  }
}

export default Portfolio;