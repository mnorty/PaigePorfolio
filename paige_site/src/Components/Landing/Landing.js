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
          <div className="videoBody">
            <div className="landingVideo">video container</div>
          </div>
        </div>
        <div className="pageDivision" id="three">
          <div>step container</div>
        </div>
        <div className="pageDivision" id="four">
          <div className="landingTitles">testimonial title</div>
          <div>body container
            <div>left</div>
            <div>right</div>
          </div>
        </div>
        <div className="pageDivision" id="five"></div>
        <div className="pageDivision" id="six"></div>
      </div>
    )
  }
}

export default Landing