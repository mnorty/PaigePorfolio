import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <nav>
        <div>
          <Link to='/contact'>Contact Me</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/aboutme'>About me</Link>
          <Link to='/'>Landing</Link>
        </div>
      </nav>
    )
  }
}

export default NavBar