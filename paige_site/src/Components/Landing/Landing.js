import React, { Component } from "react";
import "./Landing.css"

class Landing extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <div className="pageDivision" id="one"></div>
        <div className="pageDivision" id="two">
          <div className="landingTitles">From Photo to finish, the process is easy and incredible.</div>
          <div className="landingBody">
            <div className="landingVideo">video container</div>
          </div>
        </div>
        <div className="pageDivision" id="three">
          <div className="stepBody">
            <div className="stepContainer">Step #</div>
            <div className="stepContainer">Step #</div>
            <div className="stepContainer">Step #</div>
            <div className="stepContainer">Step #</div>
            <div className="stepContainer">Step #</div>
          </div>
        </div>
        <div className="pageDivision" id="four">
          <div className="landingTitles">testimonial title</div>
          <div className="landingBody" id="testimonialBody">
            <div className="testimonial"> Left Testimonial</div>
            <div className="testimonial">Right Testimonial</div>
          </div>
        </div>
        <div className="pageDivision" id="five">
          <div className="landingTitles">Before and after title</div>
          <div className="landingBody">
            <div className="before">carosel body</div>
          </div>
        </div>
        <div className="pageDivision" id="six"></div>
      </div>
    )
  }
}

export default Landing