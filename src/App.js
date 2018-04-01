import React, { Component } from "react";
import logo from "./logo.svg";
import LogoDiv from "./brHackNightLogo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <LogoDiv />
        </div>
      </div>
    );
  }
}

export default App;
