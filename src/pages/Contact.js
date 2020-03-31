import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
          <ContactInfo />
        <Footer />
      </Wrapper>
    )
  }
}

export default Contact;