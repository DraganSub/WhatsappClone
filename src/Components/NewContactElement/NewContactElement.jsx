import React from "react";
import "./NewContactElement.css";
const NewContactElement = (props) => {
  return (
    <div className="newContact" onClick={props.goToContact}>
      <div className="newContact__img-container">
        <img
          className="newContact__img"
          src={props.userImg}
          alt={props.userName}
        />
      </div>
      <div className="newContact__info-container">
        <div className="newContact__info-details">
          <h1 className="newContact__info-userName">{props.userName}</h1>
          <div className="newContact__info">
            <p className="newContact__info-content">{props.msgContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContactElement;
