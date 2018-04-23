import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search title='Search'/>   
      </div>
    );
  }
}

export default App;
