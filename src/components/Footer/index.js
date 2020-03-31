import React from "react";
import "./style.css";

const iconPath = process.env.PUBLIC_URL + '/assets/images/';

function Footer() {
  return ( 
    <div id="footer">
      {/* <span id="backUp">&#8593;</span> Add back in after assignment submission and re-create rolling page*/}
      <br></br>
      <div className="row social">
        <div className="col-sm-2 text-center">
          <img className="icons" id="github" src={iconPath + "icons/github-icon.png"} value="https://github.com/EdwardEMC" alt="github"/>
        </div>
        <div className="col-sm-2 text-center">
          <img className="icons" id="facebook" src={iconPath + "icons/facebook-icon.png"} value="https://www.facebook.com/edward.m.coad" alt="facebook"/>
        </div>
        <div className="col-sm-2 text-center">
          <img className="icons" id="linkedin" src={iconPath + "icons/linkedin-icon.png"} value="https://www.linkedin.com/in/edwardcoad/" alt="linkedIn"/>
        </div>
        <div className="col-sm-2 text-center">
          <img className="icons" id="instagram" src={iconPath + "icons/insta-icon.png"} alt="instagram"/>
        </div>
      </div>
      <div className="row justify-content-center">
        <p id="copyname">Edward Coad <span id="copyright">&copy;2019</span></p>
      </div>
    </div>
  )
}

export default Footer;