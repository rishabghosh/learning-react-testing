import React, { Component, useState, useEffect } from "react";
import "./styles/App.css";

const EMPTY_STRING = "";
const ERROR_MESSAGE = "Count cant be negentive";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, error: EMPTY_STRING };
  }

  _handleIncrement() {
    if (this.state.error) {
      this.setState(prevState => {
        return { error: EMPTY_STRING };
      });
    }
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  _handleDecrement() {
    if (this.state.count <= 0) {
      this.setState(prevState => {
        return { error: ERROR_MESSAGE };
      });
      return;
    }
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      //the name of the attribut could be anything
      //but the convention is to use data-test
      <div className="App" data-test="component-app">
        <header data-test="header">react version is {React.version}</header>
        <h1 data-test="counter-display">The Count Is {this.state.count}</h1>
        <div data-test="error-display">{this.state.error}</div>
        <button
          data-test="increment-button"
          onClick={this._handleIncrement.bind(this)}
        >
          Increment
        </button>
        <button
          data-test="decrement-button"
          onClick={this._handleDecrement.bind(this)}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
