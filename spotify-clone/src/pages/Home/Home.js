import React from "react";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
function Home({ spotify }) {
  return (
    <div className="home">
      <div className="player_body">
        <Sidebar />
        <div className="dashboard">
          <div className="dashboard_topBar">
            <div className="topBar_icons">
              <Link className="rounded_container">
                <ChevronLeftIcon className="rounded_icon" />
              </Link>
              <Link className="rounded_container">
                <ChevronRightIcon className="rounded_icon" />
              </Link>
            </div>
            <div className="topBar_menu">
              <img
                src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p320x320/64582676_2399903296735165_260334065347985408_n.jpg?_nc_cat=105&_nc_sid=0c64ff&_nc_ohc=hcCcdWoSYFkAX_2PUMs&_nc_ht=scontent-ort2-1.xx&tp=6&oh=850b32343422279e579732a07d507c79&oe=5F87EB79"
                alt="william fontanetti"
                className="topBar_picture"
              />
              <span className="topBar_name">William Fontanetti</span>
              <ExpandMoreIcon className="topBar_expand" />
            </div>
          </div>
          <div className="dashboard_category">
            <div className="category_bar">
              <h4>CategoryName</h4>
              <Link className="seeAll">VER TUDO</Link>
            </div>
            <div className="category_container">
              <div className="category_item">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da84b1b4964557d72e0520ebcc7d"
                  alt="item"
                />
                <h5>PlaylistName</h5>
                <span>...</span>
              </div>
              <div className="category_item">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da84b1b4964557d72e0520ebcc7d"
                  alt="item"
                />
                <h5>PlaylistName</h5>
                <span>...</span>
              </div>
              <div className="category_item">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da84b1b4964557d72e0520ebcc7d"
                  alt="item"
                />
                <h5>PlaylistName</h5>
                <span>...</span>
              </div>
              <div className="category_item">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da84b1b4964557d72e0520ebcc7d"
                  alt="item"
                />
                <h5>PlaylistName</h5>
                <span>...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Home;
