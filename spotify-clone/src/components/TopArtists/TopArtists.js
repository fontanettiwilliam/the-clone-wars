import React from "react";
import "./TopArtists.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../providers/DataLayer";

function TopArtists() {
  const [{ top_artists }] = useDataLayerValue();
  return (
    <div className="dashboard_category">
      <div className="category_bar">
        <h4>Seus artistas favoritos</h4>
        <Link className="seeAll" to="/home">
          VER TUDO
        </Link>
      </div>
      <div className="category_container">
        {top_artists?.items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TopArtists;
