import React from "react";
import "./style.css";

function Project(props) {
  const imagePath = process.env.PUBLIC_URL + '/assets/images/portfolio/';

  return (
  <div className={"carousel-item " + props.class}>
    <div id="imageHolder">
      <img id="portfolioImage" src={imagePath + props.url} alt={props.title}/>
    </div>
    <div className="carousel-caption d-md-block">
      <h5>{props.title}</h5>
      {/* <p id="description">{props.text}</p> */}
      <a href={props.repo}>Repository</a>
      <a href={props.deployed}>Deployed</a>
    </div>
  </div>
  )
}

export default Project;