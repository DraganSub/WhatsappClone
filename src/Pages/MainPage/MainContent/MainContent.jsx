import React from "react";
import MainContentHeader from "./MainContentHeader/MainContentHeader";
import MainContentMessages from "./MainContentMessages/MainContentMessages";
import "./MainContent.css";
import MessageContainer from "./MainContentMessages/MessageContainer/MessageContainer";
import MainContentFooter from "./MainContentFooter/MainContentFooter";
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.childDiv = React.createRef();
  }

  componentDidMount = () => this.handleScroll();

  componentDidUpdate = () => this.handleScroll();

  handleScroll = () => {
    this.childDiv.current.scrollIntoView();
  };

  render() {
    return (
      <div className="screen-height">
        <MainContentHeader />
        <MainContentMessages>
          <MessageContainer
            user={true}
            msgContent={"HelloHelloHelloHello"}
            timeSent="22:12"
          />

          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />
          <MessageContainer
            user={true}
            msgContent={"HelloHelloHelloHello"}
            timeSent="22:12"
          />

          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />
          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />
          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />
          <MessageContainer
            user={true}
            msgContent={"HelloHelloHelloHello"}
            timeSent="22:12"
          />

          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />
          <MessageContainer
            user={true}
            msgContent={"HelloHelloHelloHello"}
            timeSent="22:12"
          />

          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />

          <MessageContainer user={true} msgContent={"Hello"} timeSent="22:12" />
          <MessageContainer
            user={true}
            msgContent={"HelloHelloHelloHello"}
            timeSent="22:12"
          />

          <MessageContainer
            msgContent={
              "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH loHelloHelloHelloHelloH loHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloHloHelloHelloHelloHelloH"
            }
            timeSent="22:12"
          />

          <MessageContainer msgContent={"Hello World"} timeSent="22:12" />

          <MessageContainer
            user={true}
            className="lastMsg"
            msgContent={"Last Message in conversation "}
            timeSent="22:12"
          />
          <div className="alwaysScrollIn" ref={this.childDiv}></div>
          <MainContentFooter />
        </MainContentMessages>
      </div>
    );
  }
}

export default MainContent;
