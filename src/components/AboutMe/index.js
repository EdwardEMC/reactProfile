import React from "react";
import "./style.css";

const iconPath = process.env.PUBLIC_URL + '/assets/';

function AboutMe() {
    return (
      <div id="about">
        <div className="container about-content">
            <h2><strong>About Me</strong></h2>
            <hr></hr>
            <img id="profilePicture" src={iconPath + "images/aboutPicture.jpg"} alt="Edward's profile" height="200px" width="200px"/>

            <p>Currently a Full Stack Web Developer with extensive experience as a hospitality business owner. Skills in HTML, CSS and Javascript. Strengths in organisation, communication, graphic design and managing a team in a time-limited environment. Successfully started a small business whilst managing all business aspects, including but not limited to, website design and social media. Able to grow the business from an idea to a food truck and ultimately a cafe within 3 years.</p> 
            
            <p>Passionate about solving logic based challenges, evaluating them to offer multiple solutions and choosing the most appropriate. Positioned well to not only develop interactive responsive web applications but also to evaluate the effectiveness and implementation by the development team, through my years of managing and training hospitality teams. </p>
            <br></br>
            <br></br>
            <h4 className="text-center">Coding goals</h4>
            <hr></hr>
            <br></br>
            <div className="row text-center">
              <div className="col-sm">
                <img className="goal-icon" src={iconPath + "images/icons/learning.jpg"} alt="learning"/>
                <h6>Learning</h6>
                <br></br>
                <p>Expanding a knowledge base far beyond just Html, css & javaScript.</p>
              </div>
              <div className="col-sm">
                <img className="goal-icon" src={iconPath + "images/icons/automation.png"} alt="automation"/>
                <h6>Automation</h6>
                <br></br>
                <p>If it only has to be coded once, it's more than enough.</p>
              </div>
              <div className="col-sm">
                <img className="goal-icon" src={iconPath + "images/icons/dynamic.png"} alt="dynamic"/>
                <h6>Dynamic</h6>
                <br></br>
                <p>Add a little life into a webpage through the development of the UX.</p>
              </div>
              <div className="col-sm">
                <img className="goal-icon" src={iconPath + "images/icons/adapt.png"} alt="adapt"/>
                <h6>Adaptability</h6>
                <br></br>
                <p>Develop the ability to code any type of application or machine possible.</p>
              </div>
            </div>
        </div>    
      </div>
    )
  }
  
export default AboutMe;