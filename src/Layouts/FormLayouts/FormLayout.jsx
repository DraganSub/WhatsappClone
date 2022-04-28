import React from "react";
import "./FormLayout.css";
const FormLayout = (props) => {
  return (
    <div className="formContainer">
      <div className="form--positionMid">
        <div className="whatsapp-logo--positionMid">
          <i class="fa-brands fa-whatsapp whatsapp-logo"></i>
        </div>
        <div className="formTitle">{props.formTitle}</div>
        <div className="form--displayFlex">{props.children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
