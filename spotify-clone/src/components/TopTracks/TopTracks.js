import React from "react";
import "./TopTracks.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../providers/DataLayer";

function TopTracks() {
  const [{ top_tracks }] = useDataLayerValue();
  return (
    <div className="dashboard_category">
      <div className="category_bar">
        <h4>As músicas que não saem da sua cabeça</h4>
        <Link className="seeAll" to="/home">
          VER TUDO
        </Link>
      </div>
      <div className="category_container">
        {top_tracks?.items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TopTracks;
