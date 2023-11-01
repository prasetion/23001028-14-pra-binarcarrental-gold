import React from "react";
import "./Button.css";

const Button = ({ name, callback }) => {
  return (
    <div>
      <a onClick={callback} className="container-button">
        {name}
      </a>
    </div>
  );
};

export default Button;
