import React from "react";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

import TopArtists from "../../components/TopArtists/TopArtists";
import TopTracks from "../../components/TopTracks/TopTracks";
import TopbarMenu from "../../components/TopbarMenu/TopbarMenu";

function Home({ spotify }) {
  return (
    <div className="home">
      <div className="dashboard_body">
        <Sidebar />
        <div className="dashboard">
          <TopbarMenu />
          <TopArtists />
          <TopTracks />
        </div>
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Home;
