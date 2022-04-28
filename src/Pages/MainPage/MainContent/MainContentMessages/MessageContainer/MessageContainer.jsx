import React from "react";
import MessageElement from "../../../../../Components/MessageElement/MessageElement";
import "./MessageContainer.css";

const MessageContainer = (props) => {
  return (
    <div className={props.className ? "msg lastMsg" : "msg"}>
      <div className="messageContainer--positionMiddle">
        <div
          className={
            props.user ? " messageContainer--right" : "messageContainer--left"
          }
        >
          <div className="message-elem--padding20">
            <MessageElement
              user={props.user}
              msgContent={props.msgContent}
              timeSent={props.timeSent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
