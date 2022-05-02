import React from "react";
import Input from "../../../../Components/Input/Input";
import "./MainContentFooter.css";

const MainContentFooter = (props) => {
  return (
    <form
      onSubmit={(e) =>
        props.sendNewMessage(
          props.uid,
          props.contactId,
          props.contact,
          e.preventDefault()
        )
      }
      className="MainContentFooter-container"
    >
      <i className="fa-regular fa-face-grin-beam footer--options"></i>
      <i className="fa-solid fa-paperclip footer--options"></i>

      <Input
        type="text"
        className="Main-content-msgInput"
        placeholder="Type new message..."
        value={props.messageContent}
        onChange={(e) => props.setMessageContent(e)}
      />

      <button className="send" type="submit">
        <i className="fa-solid fa-share footer--options"></i>
      </button>
    </form>
  );
};

export default MainContentFooter;
