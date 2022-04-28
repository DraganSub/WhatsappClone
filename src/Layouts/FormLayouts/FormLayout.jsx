import React from "react";
import "./FormLayout.css";
const FormLayout = (props) => {
  return (
    <div className="formContainer">
      <div className="form--positionMid">
        <div className="whatsapp-logo--positionMid">
          <i className="fa-brands fa-whatsapp whatsapp-logo"></i>
        </div>
        <div className="formTitle">{props.formTitle}</div>

        <form onSubmit={props.onSubmitForm} className="form--displayFlex">
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default FormLayout;
