import React from "react";
import "./style.css";

function Project(props) {
  const imagePath = process.env.PUBLIC_URL + '/assets/images/portfolio/';

  return (
  <div className={"carousel-item " + props.class}>
    <div id="imageHolder">
      <img id="portfolioImage" src={imagePath + props.url} alt={props.title} className="img-fluid"/>
    </div>
    <div className="carousel-caption d-md-block">
      <h5 id="title">{props.title}</h5>
      <br></br>
      <p className="d-none d-md-block" id="description">{props.text}</p>
      <a className="linked" href={props.repo}>Repository</a>
      &emsp;
      <a className="linked" href={props.deployed}>Deployed</a>
    </div>
  </div>
  )
}

export default Project;