import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      prevNumber: "",
      currNumber: "",
      operator: "",
    };
  }
  addtoInputscreen = (val) => {
    this.setState({ input: this.state.input + val });
  };
  addZerotoInputscreen = (val) => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  addDecimaltoInputscreen = (val) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  ClearInputScreen = () => {
    this.setState({ input: "" });
  };
  add = () => {
    this.state.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "addition";
  };
  subtract = () => {
    this.state.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "minus";
  };
  multiplication = () => {
    this.state.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };
  divide = () => {
    this.state.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "division";
  };
  answer = () => {
    this.state.currNumber = this.state.input;
    if (this.state.operator == "addition") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) + parseFloat(this.state.currNumber),
      });
    } else if (this.state.operator == "minus") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) - parseFloat(this.state.currNumber),
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) * parseFloat(this.state.currNumber),
      });
    } else if (this.state.operator == "division") {
      this.setState({
        input:
          parseFloat(this.state.prevNumber) / parseFloat(this.state.currNumber),
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button UserClicks={this.addtoInputscreen}>7</Button>
            <Button UserClicks={this.addtoInputscreen}>8</Button>
            <Button UserClicks={this.addtoInputscreen}>9</Button>
            <Button UserClicks={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button UserClicks={this.addtoInputscreen}>4</Button>
            <Button UserClicks={this.addtoInputscreen}>5</Button>
            <Button UserClicks={this.addtoInputscreen}>6</Button>
            <Button UserClicks={this.multiplication}>*</Button>
          </div>
          <div className="row">
            <Button UserClicks={this.addtoInputscreen}>1</Button>
            <Button UserClicks={this.addtoInputscreen}>2</Button>
            <Button UserClicks={this.addtoInputscreen}>3</Button>
            <Button UserClicks={this.add}>+</Button>
          </div>
          <div className="row">
            <Button UserClicks={this.addDecimaltoInputscreen}>.</Button>
            <Button UserClicks={this.addZerotoInputscreen}>0</Button>
            <Button UserClicks={this.answer}>=</Button>
            <Button UserClicks={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton clr={this.ClearInputScreen}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
