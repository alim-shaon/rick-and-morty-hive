import React, { useEffect, useState } from "react";
import "./Home.css";
import portalImage from "../../Media asset/Home page/Hero Elements/portal.png";
import Header from "../Header/Header";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cast from "../Cast/Cast";
// from slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  carouselSettings,
  secondCarouselSettings,
} from "../../hook/SlickCarouselControl";
import LocationCard from "../LocationCard/LocationCard";
import Episode from "../Episodes/Episode";

const Home = () => {
  // load all character
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
  }, []);

  const settingsOne = carouselSettings();
  const settingsTwo = secondCarouselSettings();
  return (
    <div>
      <div className="home-head-container">
        <Header></Header>
        <div className="home-bg-1"></div>
        <div className="home-bg-2"></div>
        <div className="home-bg-3"></div>
        <h1 className="glow ">Thisglowingeffect</h1>
        <div className="home-title-container font-face-TT-bold-italic">
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
          <div className="d-flex justify-content-between ">
            <div className="mx-5 my-5">
              <p style={{ fontSize: "24px" }}>Meet The Cast</p>
            </div>
            <div className="mx-5 my-5">
              <Link className="mx-4 my-5 view-all-button" to={"/castList"}>
                View All
              </Link>
            </div>
          </div>
          <Slider
            {...settingsOne}
            className="cast-card-container mx-auto g-4 justify-content-center"
          >
            {characters.map((character) => (
              <Cast key={character.id} cast={character}></Cast>
            ))}
          </Slider>

          <div className="my-4">
            <div className="my-5">
              <p className="mx-5 my-4 pt-5" style={{ fontSize: "24px" }}>
                Episodes
              </p>
              <Slider
                {...settingsTwo}
                className="cast-card-container mx-auto g-4 justify-content-center"
              >
                {episodes.map((episode) => (
                  <Episode key={episode.id} episode={episode}></Episode>
                ))}
              </Slider>
            </div>
          </div>

          <div className="my-4">
            <div className="my-5">
              <p className="mx-5 my-4 pt-5" style={{ fontSize: "24px" }}>
                Locations
              </p>
              <Slider
                {...settingsTwo}
                className="cast-card-container mx-auto g-4 justify-content-center"
              >
                {locations.map((location) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                  ></LocationCard>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Home;
