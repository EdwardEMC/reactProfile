import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const videoPath = process.env.PUBLIC_URL + '/assets/';

function Title() {
  return (
    <div id="home">
      <video autoPlay muted loop id="welcomeAnimate">
        <source src={videoPath + "welcomePage.mp4"} type="video/mp4"/>
      </video>
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