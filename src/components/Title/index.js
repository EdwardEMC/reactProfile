import React from "react";
import "./style.css";


function Title() {
  return (
    <div id="home">
      <div id="welcome">
        <h1>My name is <span id="welcome_banner">Edward Coad</span>.</h1>
        <h1>I'm a full stack web developer.</h1>
        <br></br>
        <button id="view" onClick={()=>{console.log("change to about")}}>Enter <span id="arrow">&#8594;</span></button>
        <br></br>
      </div>
    </div>
  )
}

export default Title;