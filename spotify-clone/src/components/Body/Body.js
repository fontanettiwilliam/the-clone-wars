import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { useDataLayerValue } from "../../providers/DataLayer";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discover_weekly?.images[0]?.url} alt="info_picture" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>THE NAME</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayArrowIcon className="body_play" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.track?.name} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
