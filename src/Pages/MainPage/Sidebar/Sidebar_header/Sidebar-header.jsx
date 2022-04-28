import React from "react";
import "./Sidebar-header.css";
import ProfilePlaceholder from "../../../../Common/img/placeholder.png";
import StatusIcon from "../../../../Common/img/statusIcon.png";
import NewMessageIcon from "../../../../Common/img/newMessage.png";
import OptionsIcon from "../../../../Common/img/settingsIcon.png";
class SidebarHeader extends React.Component {
  render() {
    return (
      <div className="sidebar-header">
        <div className="sidebar-header__left-position">
          <img
            className="sidebar-header__profile-img"
            src={ProfilePlaceholder}
            alt="profile"
          />
        </div>
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
            />
          </div>
          <div className="sidebar-header__options">
            <img
              className="sidebar-header__options-img sidebar-header__img"
              src={OptionsIcon}
              alt="options"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarHeader;
