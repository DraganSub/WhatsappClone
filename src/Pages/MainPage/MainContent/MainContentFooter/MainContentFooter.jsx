import React from "react";
import Input from "../../../../Components/Input/Input";
import "./MainContentFooter.css";

const MainContentFooter = () => {
  return (
    <div className="MainContentFooter-container">
      <i className="fa-regular fa-face-grin-beam footer--options"></i>
      <i className="fa-solid fa-paperclip footer--options"></i>

      <Input
        type="text"
        className="Main-content-msgInput"
        placeholder="Type new message..."
      />
      <i className="fa-solid fa-microphone footer--options"></i>
    </div>
  );
};

export default MainContentFooter;
