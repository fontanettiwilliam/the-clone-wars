/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Playlist.css";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Playlist({ spotify }) {
  const query = useQuery();
  const playlistId = query.get("playlistId");

  const [playlist, setPlaylist] = useState(null);
  const configPlaylist = async () => {
    console.log("playlistId", playlistId);
    const pl = await spotify.getPlaylist(playlistId);
    console.log("pl", pl);
    setPlaylist(pl);
  };

  useEffect(() => {
    configPlaylist();
  }, [playlistId]);

  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} playlist={playlist} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Playlist;
