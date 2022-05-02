import React from "react";
import "./MainContentHeader.css";
import MainContentHeaderInfo from "./MainContentHeaderInfo/MainContentHeaderInfo";
import UserImgPlaceholder from "../../../../Common/img/placeholder.png";

import HeaderOptionsIcon from "../../../../Common/img/settingsIcon.png";
class MainContentHeader extends React.Component {
  render() {
    return (
      <div className="main-content-header">
        <MainContentHeaderInfo
          userImg={this.props.userImg}
          userName={this.props.username}
          lastSeenTime="today in 14:00h"
        />
        <div className="main-content-header__right-options">
          <i className="fa-solid fa-magnifying-glass main-content-header__searchIcon"></i>

          <img
            src={HeaderOptionsIcon}
            alt="HeaderOptionsIcon"
            className="main-content-header__optionsIcon"
          />
        </div>
      </div>
    );
  }
}

export default MainContentHeader;
