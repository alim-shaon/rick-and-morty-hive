import "./Home.css";
import portalImage from "../../Media asset/Home page/Hero Elements/portal.png";
import Header from "../Header/Header";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cast from "../Cast/Cast";
import bubbleImage from "../../Media asset/Home page/Hero Elements/bubble.png";
import gunImage from "../../Media asset/Home page/Hero Elements/Gun.png";
import pillImage from "../../Media asset/Home page/Hero Elements/pill.png";
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
import { useCharacters, useEpi, useLoc } from "../../hook/loadData";

const Home = () => {
  // load all character
  const [characters] = useCharacters([]);
  const [episodes] = useEpi([]);
  const [locations] = useLoc([]);

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
          <h1 className="home-title mx-auto">
            <span>The</span>
            <span>
              <img src={portalImage} alt="" />
            </span>
            <span className="font-face-TT-bold gradient-text">
              RICK & <br /> MORTY
            </span>{" "}
            <span>wiki</span>
          </h1>
          <Row className="my-5 g-5 overflow-hidden font-face-TT-regular justify-content-center align-items-center">
            <Col xs={11} lg={2} className="mx-0 text-center order-2 order-lg-1">
              <Button className="mx-0 custom-button-1">Watch Now</Button>
            </Col>
            <Col className="order-1 order-lg-2" xs={11} lg={2}>
              <p className="mx-auto order-1 order-lg-2 custom-color-1">
                Brilliant but boozy scientist Rick hijacks his fretful teenage
                grandson, Morty, for wild escapades in other worlds and
                alternate dimensions.
              </p>
            </Col>
          </Row>
        </div>
        <div className="bubble-image">
          <img src={bubbleImage} alt="" />
        </div>
        <div className="gun-image">
          <img src={gunImage} alt="" />
        </div>
        <div className="pill-image">
          <img src={pillImage} alt="" />
        </div>

        <div className="color-white home-body py-5 mx-4">
          <div className="d-flex justify-content-between align-items-center my-3 my-lg-5">
            <div className="mx-0 mx-lg-5 my-2">
              <p className="home-font-2">Meet The Cast</p>
            </div>
            <div className="mx-0 mx-lg-5 my-2">
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
              <p className="mx-5 my-4 pt-5 home-font-2">Episodes</p>
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
              <p className="mx-5 my-4 pt-5 home-font-2">Locations</p>
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
