import React from "react";
import { Link } from "react-router-dom";
import "./Cast.css";

const Cast = ({ cast }) => {
  const { id, name, image } = cast;
  // console.log(id);
  return (
    <div className="cast-card mx-3">
      <Link to={`/castDetails/${id}`}>
        <img className="p-3" src={image} alt="" />
        <p className="p-3">{name}</p>
      </Link>
    </div>
  );
};

export default Cast;
