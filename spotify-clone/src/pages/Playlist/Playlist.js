import React from "react";
import "./Playlist.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

function Playlist({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Playlist;
