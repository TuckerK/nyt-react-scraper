import React, { Component } from "react";
import "./Saved.css";

class Saved extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
        </div>
      </div>
    );
  }
}

export default Saved;
