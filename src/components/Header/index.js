import React from "react";
import "./style.css"

const gifPath = process.env.PUBLIC_URL + '/assets/';

function moveDuck() {
  const duck = document.getElementById("duck");
  let right = duck.offsetLeft;
  let i = 0;
  setInterval(function () {
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
    </div>
  )
}

export default Header;