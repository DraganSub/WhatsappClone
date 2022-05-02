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

  componentDidMount = () => {
    this.handleScroll();
  };
  shouldComponentUpdate = (nextProps) => {
    if (!nextProps.contactId) {
      return false;
    } else {
      return true;
    }
  };
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.currentMessageList.length !==
      this.props.currentMessageList.length
    ) {
      this.props.getMessagesForUser(this.props.uid, this.props.contactId);
    }

    return this.handleScroll();
  };

  handleScroll = () => {
    this.childDiv.current.scrollIntoView();
  };

  userMsgDecider = (uid) => {
    let user;
    if (uid === this.props.contactId) {
      user = false;
    }
    if (uid === this.props.uid) {
      user = true;
    }
    if (uid !== this.props.contactId) {
      user = true;
    }

    return user;
  };

  render() {
    const currentContact = this.props.currentContact;
    console.log(this.props.currentMessageList.length);
    return (
      <div className="screen-height">
        {currentContact.map((contact) => (
          <MainContentHeader
            key={contact.uid}
            userImg={contact.imgLink}
            username={contact.username}
          />
        ))}
        <MainContentMessages>
          {this.props.currentMessageList.map((message) => (
            <MessageContainer
              key={message}
              user={this.userMsgDecider(message.user)}
              msgContent={message.messageContent}
              timeSent="22:12"
            />
          ))}

          <div className="alwaysScrollIn" ref={this.childDiv}></div>
        </MainContentMessages>{" "}
        <div className="positin--relative">
          <MainContentFooter
            messageContent={this.props.messageContent}
            setMessageContent={this.props.setMessageContent}
            sendNewMessage={this.props.sendNewMessage}
            currentContact={this.props.currentContact}
            uid={this.props.uid}
            contactId={this.props.contactId}
            contact={this.props.contact}
          />
        </div>
      </div>
    );
  }
}

export default MainContent;
