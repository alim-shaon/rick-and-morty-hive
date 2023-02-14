import React, { useEffect, useState } from "react";
import "./Home.css";
import portalImage from "../../Media asset/Home page/Hero Elements/portal.png";
import Header from "../Header/Header";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cast from "../Cast/Cast";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  console.log(characters);
  return (
    <div>
      <div className="home-head-container">
        <div className="home-bg-1"></div>
        <div className="home-bg-2"></div>
        <div className="home-bg-3"></div>
        <Header></Header>
        <div className="home-title-container font-face-TT-bold-italic">
          <h1 className="glow ">Thisglowingeffect</h1>
          <h1 className="home-title">
            <span>The</span>
            <span>
              <img src={portalImage} alt="" />
            </span>
            <span className="font-face-TT-bold gradient-text">
              RICK & <br /> MORTY
            </span>{" "}
            <span>wiki</span>
          </h1>
          <Row className="my-5 g-0 overflow-hidden font-face-TT-regular justify-content-md-center align-items-center">
            <Col xs lg="2" className="mx-0 text-center">
              <Button className="mx-0 custom-button-1">Watch Now</Button>
            </Col>
            <Col xs lg="2">
              <p className="mx-0 custom-color-1">
                Brilliant but boozy scientist Rick hijacks his fretful teenage
                grandson, Morty, for wild escapades in other worlds and
                alternate dimensions.
              </p>
            </Col>
          </Row>
        </div>
        <div className="bubble-image"></div>
        <div className="gun-image"></div>
        <div className="pill-image"></div>

        <div className="color-white home-body py-5 mx-4">
          <div className="d-flex justify-content-between mx-5">
            <div className="mx-5 my-5">
              <p style={{ fontSize: "24px" }}>Meet The Cast</p>
            </div>
            <div className="mx-5 my-5">
              <Link className="mx-4 my-5 view-all-button" to={"/castList"}>
                View All
              </Link>
            </div>
          </div>
          <Row className="g-4 justify-content-center">
            {characters.map((character) => (
              <Cast key={character.id} cast={character}></Cast>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
