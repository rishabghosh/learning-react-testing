import React, { Component, useState, useEffect } from "react";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  _handleIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      //the name of the attribut could be anything
      //but the convention is to use data-test
      <div className="App" data-test="component-app">
        <header data-test="header">react version is {React.version}</header>
        <h1 data-test="counter-display">The Count Is {this.state.count}</h1>
        <h4 custom-test="counter-display">custom attribute works</h4>
        <button
          data-test="increment-button"
          onClick={this._handleIncrement.bind(this)}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
