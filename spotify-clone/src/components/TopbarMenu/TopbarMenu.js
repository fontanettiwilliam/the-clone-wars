import React from "react";
import "./TopbarMenu.css";
import { useDataLayerValue } from "../../providers/DataLayer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

function TopbarMenu() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="topBar">
      <div className="topBar_icons">
        <Link className="rounded_container" to="/home">
          <ChevronLeftIcon className="rounded_icon" />
        </Link>
        <Link className="rounded_container" to="/home">
          <ChevronRightIcon className="rounded_icon" />
        </Link>
      </div>
      <div className="topBar_menu">
        <img
          src={user?.images[0]?.url}
          alt={user?.display_name}
          className="topBar_picture"
        />
        <span className="topBar_name">{user?.display_name}</span>
        <ExpandMoreIcon className="topBar_expand" />
      </div>
    </div>
  );
}

export default TopbarMenu;
