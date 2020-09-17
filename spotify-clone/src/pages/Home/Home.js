import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>This is homescreen</h1>
      <Link to="/playlist">to playlist</Link>
    </div>
  );
}

export default Home;
