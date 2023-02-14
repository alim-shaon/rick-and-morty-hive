import React from "react";
import "./Cast.css";

const Cast = ({ cast }) => {
  const { name, image } = cast;
  return (
    <div className="cast-card mx-3">
      <img className="p-3" src={image} alt="" />
      <p className="p-3">{name}</p>
    </div>
  );
};

export default Cast;
