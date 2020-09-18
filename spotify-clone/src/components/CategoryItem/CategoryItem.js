import React, { useState } from "react";
import "./CategoryItem.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function CategoryItem({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="category_item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.type === "artist" ? (
        <img
          src={item?.images[0].url}
          alt={item.name}
          className="artist_avatar"
        />
      ) : (
        <img src={item?.album.images[0].url} alt={item.name} />
      )}

      <h5>{item.name}</h5>

      {item.type === "artist" ? (
        <span>Artista</span>
      ) : (
        <span>{item.artists.map((artist) => artist.name).join(", ")}</span>
      )}
      {hover && (
        <div className="category_fab">
          <PlayArrowIcon />
        </div>
      )}
    </div>
  );
}

export default CategoryItem;
