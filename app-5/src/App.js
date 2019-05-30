import React, { Component } from "react";
import "./App.css";
import Image from "./components/image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImageProp={"https://http.cat/409"} />
      </div>
    );
  }
}

export default App;
