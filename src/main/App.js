import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      //the name of the attribut could be anything
      //but the convention is to use data-test
      <div className="App" data-test="component-app">
        <header data-test="header">
          react version is {React.version}
        </header>
        <h1 data-test="counter-display">The Count Is </h1>
        <h1 data-test="counter-display">The Count Is </h1>
        <h1 custom-test="counter-display">custom test</h1>
        <button data-test="increment-button">Increment</button>
      </div>
    );
  }
}

export default App;
