import React from "react";

const BoilingVerdict = ({ celsius }) => {
  return celsius >= 100 ? (
    <h2 className="text-center text-success">Water is boiled</h2>
  ) : (
    <h2
      className="text-center text-danger
    "
    >
      Water is not boiled
    </h2>
  );
};

export default BoilingVerdict;
