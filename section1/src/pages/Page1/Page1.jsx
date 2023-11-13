import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Page1 extends Component {
  render() {
    return (
      <div>
        Page1
        <Link to={`/`}>Your Name</Link>
      </div>
    );
  }
}
