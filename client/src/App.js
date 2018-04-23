import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Saved from "./components/Saved/Saved";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" />
      <Search title="Search" />
      <Results title="Results" />
      <Saved title="Saved" />
    </div>
  </Router>
);

export default App;
