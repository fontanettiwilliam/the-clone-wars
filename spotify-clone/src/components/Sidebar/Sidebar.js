import React from "react";
import "./Sidebar.css";
import { useDataLayerValue } from "../../providers/DataLayer";
import Logo from "../../asset/logo/spotify_white.png";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src={Logo} alt="sidebar-logo" />

      <SidebarOption title="Home" Icon={HomeOutlinedIcon} link="/home" />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} link="/home" />
      <SidebarOption
        title="Your Library"
        Icon={LibraryMusicOutlinedIcon}
        link="/home"
      />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          key={playlist.name}
          title={playlist.name}
          link="/playlist"
          playlistId={playlist.id}
        />
      ))}
    </div>
  );
}
export default Sidebar;
