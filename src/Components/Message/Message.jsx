import React from "react";
import "./Message.css";
const Message = (props) => {
  return (
    <div className={props.active ? "message active" : "message"}>
      <div className="message__img-container">
        <img
          className="message__img"
          src={props.userImg}
          alt={props.userName}
        />
      </div>
      <div className="message__info-container">
        <div className="message__info-details">
          <h1 className="message__info-userName">{props.userName}</h1>
          <div className="message__info">
            {props.status === "seen" ? (
              <i className="fa-solid fa-check-double seen-check"></i>
            ) : (
              <i className="fa-solid fa-check-double unseen-check"></i>
            )}

            <p className="message__info-content">{props.msgContent}</p>
          </div>
        </div>
        <div className="message__info-timeSent">
          <p className="message__info-time">{props.time}</p>
          {/*  <i class="fa-solid fa-chevron-down"></i> */}
        </div>
      </div>
    </div>
  );
};

export default Message;
