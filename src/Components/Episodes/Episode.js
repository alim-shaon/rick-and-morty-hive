import React from "react";
import "./Episodes.css";

const Episode = ({ episode }) => {
  return (
    <div>
      <div className="episode-card-container p-3 mx-3">
        <p># {episode.episode}</p>
        <p className="episode-custom-font">{episode.name}</p>
      </div>
    </div>
  );
};

export default Episode;
