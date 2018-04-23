import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='headerDiv'>
        <h1>New York Times Article Scrubber</h1>
        <h2>Search and annotate articles from the NYT</h2>
      </div>
    );
  }
}

export default Header;
