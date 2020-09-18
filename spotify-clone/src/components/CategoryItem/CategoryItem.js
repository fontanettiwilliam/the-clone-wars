import React, { useState } from "react";
import "./CategoryItem.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const a = {
  id: "36QJpDe2go2KgaRleHCDTp",
  name: "Led Zeppelin",
  type: "artist",
  images: [
    {
      height: 600,
      url: "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
      width: 600,
    },
    {
      height: 200,
      url: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
      width: 200,
    },
    {
      height: 64,
      url: "https://i.scdn.co/image/16eb3cdae0d824b520ac17710e943a99d3ef6602",
      width: 64,
    },
  ],
};

function CategoryItem({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="category_item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="https://i.scdn.co/image/ab67706c0000da84b1b4964557d72e0520ebcc7d"
        alt="item"
      />
      <h5>PlaylistName</h5>
      <span>...</span>
      {hover && (
        <div className="category_fab">
          <PlayArrowIcon />
        </div>
      )}
    </div>
  );
}

export default CategoryItem;
