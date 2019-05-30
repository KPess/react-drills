import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: '',
    
    }
    this.alertInputs = this.alertInputs.bind(this);
  
  }
  handleChange1(val) {
    this.setState({username: val});
  }
  handleChange2(val) {
    this.setState({password: val});
  }

  alertInputs() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, login by inserting username and password.
        </p>
        <div className="fieldsandbutton">
          <input onChange={ e => this.handleChange1(e.target.value)} type="text" />
          <input onChange={ e => this.handleChange2(e.target.value)} type="text" />
          <button onClick={this.alertInputs}>Login</button>
        </div>
        
      </div>
    );
  }
}

export default App;
