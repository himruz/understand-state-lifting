import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput = ({temperature, scale, handleTemperature}) => {
  
  return (
    <div className="d-flex align-items-center">
      <label htmlFor="" className="form-label ms-3 me-3">
        {scaleNames[scale]}
      </label>
      <input type="text" value={temperature} className="form-control me-3" onChange={(e)=> handleTemperature(e, scale)}/>
    </div>
  );
};

export default TemperatureInput;
