import React from "react";
import "./Sidebar.css";
import Logo from "./asset/logo/spotify_white.png";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src={Logo} alt="sidebar-logo" />

      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  );
}
export default Sidebar;
