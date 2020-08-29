import React from "react";
import "./Sidebar.css";
import Logo from "./asset/logo/spotify_white.png";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src={Logo} alt="sidebar-logo" />

      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      <SidebarOption title="Rock" />
      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Classic" />
    </div>
  );
}
export default Sidebar;
