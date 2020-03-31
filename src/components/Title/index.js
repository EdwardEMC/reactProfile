import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Title() {
  return (
    <div id="home">
      <div id="welcome">
        <h1>My name is <span id="welcome_banner">Edward Coad</span>.</h1>
        <h1>I'm a full stack web developer.</h1>
        <br></br>
        <Link to="/about"> 
          <button id="view">Enter <span id="arrow">&#8594;</span></button>
        </Link>
        <br></br>
      </div>
    </div>
  )
}

export default Title;