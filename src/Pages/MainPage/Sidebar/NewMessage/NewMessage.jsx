import React from "react";
import Button from "../../../../Components/Button/Button";
import NewContactElement from "../../../../Components/NewContactElement/NewContactElement";
import SidebarSearch from "../SidebarSearch/SidebarSearch";
import "./NewMessage.css";

class NewMessage extends React.Component {
  render() {
    return (
      <div className="newMessage">
        <div className="newMessage__header">
          <Button
            btnClass="newMessage__backBtn"
            onClick={this.props.handleMessageOpen}
          >
            <i className="fa-solid fa-arrow-left newMessage__arrow-left"></i>
          </Button>
          <p className="newMessage__title">New message</p>
        </div>
        <div className="newMessage__searchBar">
          <SidebarSearch
            search={this.props.search}
            changeSearch={this.props.changeSearch}
          />
        </div>
        <div>
          {this.props.users.map((user) => (
            <NewContactElement
              goToContact={() => this.props.goToContact(user.uid)}
              key={user.uid}
              userImg={user.imgLink}
              userName={user.username}
              msgContent={user.whatsappStatus}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewMessage;
