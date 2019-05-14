import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  strikeHandler = () => {
    if (this.state.strikes < 3) {
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

  render() {
    return (
      <div>
        <h1>The Count</h1>
        <div>
          <h3>Strikes: {this.state.strikes}</h3>
        </div>
        <Dashboard strike={this.strikeHandler} />
      </div>
    );
  }
}

export default Display;
