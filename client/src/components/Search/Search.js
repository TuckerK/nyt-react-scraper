import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.topic || !this.state.startYear || !this.state.endYear) {
      alert("Fill out the entire form.");
    } else if (this.state.endYear > 2018 || this.state.startYear > 2018) {
      alert("Sorry, but that year is invalid");
    }

    this.setState({
      topic: "",
      startYear: "",
      endYear: ""
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <input
            value={this.state.topic}
            name="topic"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Topic"
          />
          <input
            value={this.state.startYear}
            name="startYear"
            onChange={this.handleInputChange}
            type="number"
            placeholder="Start Year"
          />
          <input
            value={this.state.endYear}
            name="startYear"
            onChange={this.handleInputChange}
            type="number"
            placeholder="End Year"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Search;
