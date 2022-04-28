import React from "react";
import Message from "../../../Components/Message/Message";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import SidebarHeader from "./Sidebar_header/Sidebar-header";
import UserImgPlaceholder from "../../../Common/img/placeholder.png";
import "./Sidebar.css";
class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <SidebarHeader />
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
}

export default Sidebar;
