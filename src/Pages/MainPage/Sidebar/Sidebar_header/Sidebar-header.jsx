import React from "react";
import "./Sidebar-header.css";
import StatusIcon from "../../../../Common/img/statusIcon.png";
import NewMessageIcon from "../../../../Common/img/newMessage.png";
import OptionsIcon from "../../../../Common/img/settingsIcon.png";
import { Link } from "react-router-dom";
class SidebarHeader extends React.Component {
  render() {
    console.log(this.props.currentUser);
    return (
      <div className="sidebar-header">
        {this.props.currentUser.map((user) => (
          <div className="sidebar-header__left-position" key={user.uid}>
            <img
              className="sidebar-header__profile-img"
              src={user.imgLink}
              alt="profile"
            />
          </div>
        ))}

        <div className="sidebar-header__right-position">
          <div className="sidebar-header__status-img">
            <img
              className="sidebar-header__status-img sidebar-header__img"
              src={StatusIcon}
              alt="status"
            />
          </div>
          <div className="sidebar-header__new-msg ">
            <img
              className="sidebar-header__newMsg-img sidebar-header__img"
              src={NewMessageIcon}
              alt="new-message"
              onClick={this.props.handleMessageOpen}
            />
          </div>
          <div className="sidebar-header__options">
            <img
              className={`sidebar-header__options-img sidebar-header__img ${
                this.props.isSettingsActive
                  ? "sidebar-header__img--active"
                  : "sidebar-header__img--notActive"
              } `}
              src={OptionsIcon}
              alt="options"
              onClick={this.props.handleSettingsOpen}
            />
            <div
              className={`options-cloud ${
                this.props.isSettingsActive
                  ? "options-cloud--active"
                  : "options-cloud--notActive"
              }`}
            >
              <p className="option-cloud__option">New group</p>
              <p className="option-cloud__option">Marked messages</p>
              <p className="option-cloud__option">Settings</p>
              <Link to="/login">
                {" "}
                <p
                  className="option-cloud__option"
                  onClick={this.props.doSignOut}
                >
                  Sign out
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarHeader;
