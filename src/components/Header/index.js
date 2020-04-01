import React from "react";
import "./style.css"

const gifPath = process.env.PUBLIC_URL + '/assets/';

function moveDuck() {
  const duck = document.getElementById("duck");
  let i = 0;
  setInterval(function () {
    //allows for screen size changes and constantly updates the size accordingly
    const invis = document.getElementById("invisible"); 
    let right = invis.offsetLeft;
    if(i >= right+20) {
      duck.style.marginRight = i;
      i = -20;
    }
    else {
      duck.style.marginRight = i + "px";
      i+=1;
    }
  }, 30);
}

function Header() {
  return (
    <div id="rolling">
      <img id="duck" onLoad={moveDuck} src={gifPath + "gifs/running.gif"} alt="running"/>
      <p id="invisible"></p>
    </div>
  )
}

export default Header;