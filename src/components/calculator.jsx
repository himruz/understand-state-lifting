import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import "./style.css";
import BoilingVerdict from "./BoilingVerdict";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleTemperature = (e, scale) => {
    this.setState({ temperature: e.target.value, scale });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature,toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
      console.log(celsius, fahrenheit);
    return (
      <div>
        <div className="d-flex justify-content-center my-5">
          <TemperatureInput
            temperature={celsius}
            scale="c"
            handleTemperature={this.handleTemperature}
          />
          <span className="equel"> = </span>
          <TemperatureInput
            temperature={fahrenheit}
            scale="f"
            handleTemperature={this.handleTemperature}
          />
        </div>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
