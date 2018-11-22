import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clicks: 0
    }

  }

  handleClick(interaction){
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render() {
    return (
      <div className="App">
        <button className="clicker" id="clicker" onClick={this.handleClick.bind(this, "click")}>{this.state.clicks} Clicks</button>
      </div>
    );
  }
}

export default App;
