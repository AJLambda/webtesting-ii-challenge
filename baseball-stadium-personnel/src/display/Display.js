import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  strikeHandler = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  };

  ballHandler = () => {
    if (this.state.balls < 3) {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      });
    }
  };

  render() {
    return (
      <div>
        <Dashboard strike={this.strikeHandler} ball={this.ballHandler} />
        <h1>The Count</h1>
        <div>
          <h3>Strikes: {this.state.strikes}</h3>
          <h3>Balls: {this.state.balls}</h3>
        </div>
      </div>
    );
  }
}

export default Display;
