import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Area1 from "./Components/area1/Area1";
//import Area3 from "./Components/area3/Area3";
//import Area4 from "./Components/area4/Area4";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Area1 />
      </>
    );
  }
}

export default App;
