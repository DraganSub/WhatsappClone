import React from "react";
import "./FormLayout.css";
const FormLayout = (props) => {
  return (
    <div className="formContainer">
      <div className="form--positionMid">{props.children}</div>
    </div>
  );
};

export default FormLayout;
