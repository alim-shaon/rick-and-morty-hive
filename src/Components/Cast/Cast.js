import React from "react";
import "./Cast.css";
import { Col } from "react-bootstrap";

const Cast = ({ cast }) => {
  const { name, image } = cast;
  return (
    <Col xs lg="2" className="cast-card mx-3">
      <img className="p-3" src={image} alt="" />
      <p className="p-3">{name}</p>
    </Col>
  );
};

export default Cast;
