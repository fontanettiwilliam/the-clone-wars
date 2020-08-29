import React from "react";
import "./Sidebar.css";
import { useDataLayerValue } from "./DataLayer";
import Logo from "./asset/logo/spotify_white.png";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  console.log("playlists >", playlists);
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src={Logo} alt="sidebar-logo" />

      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.name} title={playlist.name} />
      ))}
    </div>
  );
}
export default Sidebar;
