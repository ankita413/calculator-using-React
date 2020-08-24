import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    return (
      <div className="clearButton" onClick={() => this.props.clr()}>
        {this.props.children}
      </div>
    );
  }
}
export default ClearButton;
