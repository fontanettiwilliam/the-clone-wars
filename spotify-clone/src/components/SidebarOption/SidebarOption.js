import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ title, Icon, link, playlistId }) {
  const url = playlistId ? `${link}?playlistId=${playlistId}` : link;
  return (
    <Link className="sidebarOption" to={url}>
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </Link>
  );
}

export default SidebarOption;
