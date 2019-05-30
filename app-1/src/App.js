import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      output: '',
    };
  }

  handleChange(val) {
    this.setState({ output: val });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" style={{borderRadius: 25, }} />
        <h1>{this.state.output}</h1>
      </div>
    );
  }
}

export default App;
