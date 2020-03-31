import React from "react";
import Project from "../Project";
import information from "../../information.json";

function Carousel() {
  return (
    <div id="indicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
          <li data-target="#indicators" data-slide-to="0" className="active"></li>
          <li data-target="#indicators" data-slide-to="1"></li>
          <li data-target="#indicators" data-slide-to="2"></li>
          <li data-target="#indicators" data-slide-to="3"></li>
          <li data-target="#indicators" data-slide-to="4"></li>
          <li data-target="#indicators" data-slide-to="5"></li>
      </ol>
      <div className="carousel-inner">
        {information[1].map(element => {
          return <Project {...element} key={element.id}/>
        })}
      </div>
      <a className="carousel-control-prev" href="#indicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#indicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
      </a>
  </div>
  )
}

export default Carousel;