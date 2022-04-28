import React from "react";
import Input from "../../../../Components/Input/Input";
import "./SidebarSearch.css";
class SidebarSearch extends React.Component {
  render() {
    return (
      <div className="sidebar-search">
        <i className="fa-solid fa-magnifying-glass sidebar-search__searchIcon"></i>
        <Input
          type="text"
          className="sidebar-search__input"
          placeholder="Search or start new chat"
        />
      </div>
    );
  }
}

export default SidebarSearch;
