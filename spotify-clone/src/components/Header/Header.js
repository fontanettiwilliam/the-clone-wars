import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../providers/DataLayer";

function Header({ spotify }) {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, Podcasts or Playlists"
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="user_picture" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
