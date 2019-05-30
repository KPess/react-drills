import React, { Component } from "react";
import Todo from './components/todo'
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      taskList: [],
      task: '',
    }
    this.addToDo = this.addToDo.bind(this);

  }

  handleInputChange(value) {
    this.setState({task: value})
  }

  addToDo() {
    this.setState({
      task: [...this.state.taskList, this.state.task],
      task: ''
    })
  }
  render() {
    
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        
          <input placeholder="Enter new task" onChange={ e => this.handleInputChange(e.target.value)}></input>
          <button onClick={this.addToDo}>Add</button>
          <p><Todo /></p>
        
      </div>
    );
  }
}

export default App;


<div className="Todo">
    

</div>