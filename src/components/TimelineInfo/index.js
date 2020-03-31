import React from "react";
import information from "../../information.json";
import Expand from "../utils/Expand";
import "./style.css";

function TimelineInfo() {
  const picPath = process.env.PUBLIC_URL + '/assets/images/timeline/';

  return (
    <div id="timeline">
      <div className="container">
        <div className="line-item"></div>
        <div className="row time-line">
          <div className="col-sm single-item activeSpan">
            <span id="0" onClick={Expand}>2009-2011</span>
          </div>
          <div className="col-sm single-item">
            <span id="1" onClick={Expand}>2011-2015</span>
          </div>
          <div className="col-sm single-item">
            <span id="2" onClick={Expand}>2015-2019</span>
          </div>
          <div className="col-sm single-item">
            <span id="3" onClick={Expand}>2019-2020</span>
          </div>
          <div className="col-sm single-item">
            <span id="4" onClick={Expand}>2020-2023</span>
          </div>
        </div>
        <div id="information">
          <div className="card" id="timelineCard">
            <div className="card-header" id="feature">
                {information[0][0].feature}
            </div>
            <div className="card-body">
              <h5 className="card-title" id="header">
                {information[0][0].header}
              </h5>
              <div className="card-info" id="picDiv">
                <img src={picPath + information[0][0].url} alt="timeline" id="pictureURL"/> 
              </div>
              <p className="card-text" id="text">
                {information[0][0].text}
              </p>
            </div>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default TimelineInfo;