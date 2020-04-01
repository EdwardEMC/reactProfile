import React from "react";
import "./style.css";

const pdfPath = process.env.PUBLIC_URL + '/assets/';

function ContactInfo() {
  return (
      <div id="contact">
        <div className="container contact-area">
          <div className="row">
            <div className="col-sm-6 contact-image">
              <div className="contact-information">
                <h3>Contact Information</h3>
                <hr></hr>
                <br></br>
                <p><strong>Email:</strong> Edwardcoad.ec@gmail.com</p>
                <br></br>
                <br></br>
                <p><strong>Phone:</strong> 0402099281</p>
                <br></br>
                <br></br>
                <p><strong>Resume link: <a href={pdfPath + "Edward Coad Resume.pdf"} target="_blank">Edward Coad Resume</a></strong></p>
              </div>
            </div>
            <div className="col-sm-6 contact-container">
              <form className="contact-form" action="mailto:edwardcoad.ec@gmail.com" method="post" encType="text/plain">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <br></br>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <br></br>
                <label htmlFor="country">Type of inquiry</label>
                <select id="country" name="country">
                  <option value="work">Work related</option>
                  <option value="casual">Casual chat</option>
                  <option value="other">Other</option>
                </select>
                <br></br>
                <label htmlFor="subject">Subject</label>
                <textarea id="subjectText" name="subject" placeholder="Write something.."></textarea>
                <br></br>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    )
  }
  
export default ContactInfo;