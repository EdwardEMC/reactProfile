import React from "react";
import MoveDuck from "../utils/MoveDuck";
import "./style.css"

const gifPath = process.env.PUBLIC_URL + '/assets/';

function Header() {
  return (
    <div id="rolling">
      <img id="duck" onLoad={MoveDuck} src={gifPath + "gifs/running.gif"} alt="running"/>
      <p id="invisible"></p>
    </div>
  )
}

export default Header;