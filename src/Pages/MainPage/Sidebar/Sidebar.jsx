import React from "react";
import Message from "../../../Components/Message/Message";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import SidebarHeader from "./Sidebar_header/Sidebar-header";
import UserImgPlaceholder from "../../../Common/img/placeholder.png";
import "./Sidebar.css";
import NewMessage from "./NewMessage/NewMessage";
import { Animated } from "react-animated-css";
class Sidebar extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.currentContactId !== this.props.currentContactId) {
      this.props.getMessagesForUser(
        this.props.currentUserId,
        this.props.currentContactId
      );
    }
  }

  render() {
    let sidebar;
    if (this.props.isNewMessageActive) {
      sidebar = (
        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutLeft"
          animationInDuration={2000}
        >
          <NewMessage
            handleMessageOpen={this.props.handleMessageOpen}
            users={this.props.users}
            getUsers={this.props.getUsers}
            search={this.props.search}
            changeSearch={this.props.changeSearch}
            goToContact={this.props.goToContact}
          />
          ;
        </Animated>
      );
    } else {
      sidebar = (
        <div>
          <SidebarHeader
            doSignOut={this.props.doSignOut}
            handleSettingsOpen={this.props.handleSettingsOpen}
            isSettingsActive={this.props.isSettingsActive}
            currentUser={this.props.currentUser}
            handleMessageOpen={this.props.handleMessageOpen}
          />
          <SidebarSearch />

          <div className="sidebar-header__messageWrap">
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
              active={true}
              status="seen"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
            <Message
              userName="John Doe"
              userImg={UserImgPlaceholder}
              msgContent="Hello world"
              time="12:21"
            />
          </div>
        </div>
      );
    }

    return sidebar;
  }
}

export default Sidebar;
