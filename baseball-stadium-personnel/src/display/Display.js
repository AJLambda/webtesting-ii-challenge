import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  // strikes reset to 0 when a player reaches 3 strikes.

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

  // balls reset to 0 when a player reaches 4 balls.
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

  // balls and strikes reset to 0 when a hit is recorded.
  hitHandler = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  // a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
  foulHandler = () => {
    if (this.state.strikes <= 1) {
      this.setState({ ...this.state, strikes: this.state.strikes + 1 });
    } else {
      this.setState({ ...this.state });
    }
  };

  render() {
    return (
      <div>
        <Dashboard
          strike={this.strikeHandler}
          ball={this.ballHandler}
          hit={this.hitHandler}
          foul={this.foulHandler}
        />
        <h1>Display</h1>
        <h2>The Count:</h2>
        <div>
          <h3>Strikes: {this.state.strikes}</h3>
          <h3>Balls: {this.state.balls}</h3>
        </div>
      </div>
    );
  }
}

export default Display;
