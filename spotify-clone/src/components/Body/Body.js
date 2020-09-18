import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./Body.css";

function Body({ spotify, playlist }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      {playlist ? (
        <>
          <div className="body_info">
            <img src={playlist?.images[0]?.url} alt="info_picture" />
            <div className="body_infoText">
              <strong>{playlist?.type}</strong>
              <h2>{playlist?.name}</h2>
              <p>{playlist?.description}</p>
              <div className="body_infoOwner">
                <strong>{playlist?.owner?.display_name}</strong>
                <span>{playlist?.followers?.total} curtida</span>
                <span>{playlist?.tracks?.total} músicas</span>
              </div>
            </div>
          </div>
          <div className="body_songs">
            <div className="body_icons">
              <PlayArrowIcon className="body_play" />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>

            {playlist?.tracks.items.map((item) => (
              <SongRow key={item.track?.name} track={item.track} />
            ))}
          </div>
        </>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}

export default Body;
