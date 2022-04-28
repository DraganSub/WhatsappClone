import React from "react";
import "./MessageElement.css";

const MessageElement = (props) => {
  let userMessage = false;
  if (props.user) {
    userMessage = true;
  }
  return (
    <div className={userMessage ? " user-message-elem" : "message-elem"}>
      <div className={userMessage ? "border-box--user" : "border-box"}>
        <p
          className={
            userMessage
              ? "message-elem__content--user"
              : "message-elem__content"
          }
        >
          {props.msgContent}
        </p>
      </div>
      <div className={userMessage ? "box--position--user" : "box--position"}>
        <span
          className={
            userMessage
              ? "message-elem__timeSent"
              : "message-elem__timeSent--user"
          }
        >
          {props.timeSent}
        </span>
        {userMessage ? (
          <i className="fa-solid fa-check-double unseen-check"></i>
        ) : null}
      </div>
    </div>
  );
};

export default MessageElement;
