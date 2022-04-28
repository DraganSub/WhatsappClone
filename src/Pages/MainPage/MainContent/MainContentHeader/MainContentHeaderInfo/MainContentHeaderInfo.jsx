import React from "react";
import "./MainContentHeaderInfo.css";
const MainContentHeaderInfo = (props) => {
  return (
    <div className="main-header-info">
      <div className="user-img__wrap">
        <img src={props.userImg} alt={props.name} className="user-img__img" />
      </div>
      <div className="user-info__wrap">
        <h1 className="user-info__userName">{props.userName}</h1>
        <p className="user-info__lastSeenUpdate">
          last seen {props.lastSeenTime}
        </p>
      </div>
    </div>
  );
};

export default MainContentHeaderInfo;
