import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
          <div> {/*replace with imported JSX*/}
            {/*more JSX stuff to go here*/}
          </div>
        <Footer />
      </Wrapper>
    )
  }
}

export default Portfolio;