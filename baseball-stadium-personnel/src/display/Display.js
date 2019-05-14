import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default Display;
