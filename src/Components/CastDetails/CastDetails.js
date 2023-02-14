import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router";
import Header from "../Header/Header";
import "./CastDetails.css";
import episodeIcon from "../../Media asset/Cast Details/Icons/SVG/Episode.svg";
import genderIcon from "../../Media asset/Cast Details/Icons/SVG/Gender.svg";
import locationIcon from "../../Media asset/Cast Details/Icons/SVG/Location.svg";
import originIcon from "../../Media asset/Cast Details/Icons/SVG/origin.svg";
import redirectIcon from "../../Media asset/Cast Details/Icons/SVG/Redirect.svg";
import speciesIcon from "../../Media asset/Cast Details/Icons/SVG/Species.svg";
import statusIcon from "../../Media asset/Cast Details/Icons/SVG/Status.svg";
import EpisodeList from "../EpisodeList/EpisodeList";

const CastDetails = () => {
  const character = useLoaderData();
  // console.log(character.episode);
  // const [episodesList] = useEpisodesName(character.episode);
  // console.log();
  const episodesList = character.episode;
  return (
    <div className="text-white">
      <div className="cast-details-container">
        <Header></Header>
        <div className="cast-details-bg-1"></div>
        <div className="cast-details-bg-2"></div>
        <div className="px-1 px-lg-4 mx-3 mx-lg-5 py-5 mt-5">
          <div>
            <Row
              xs={1}
              md={1}
              lg={2}
              className="align-items-center justify-content-around"
            >
              <Col className="right-custom-border">
                <h1 className="cast-name">{character.name}</h1>
                <div className="cast-image custom-border mx-auto">
                  <img src={character.image} alt="" />
                </div>
              </Col>
              <Col className="px-2 px-lg-5">
                <Row className="g-4 justify-content-between ">
                  <Col xs={3} className="custom-border p-3 mx-1">
                    <img className="icon-image" src={statusIcon} alt="" />{" "}
                    <br />
                    <p className="small-font">Status</p>
                    <p className="cast-info-style">{character.status}</p>
                  </Col>
                  <Col xs={3} className="custom-border p-3 mx-1">
                    <img className="icon-image" src={speciesIcon} alt="" />{" "}
                    <br />
                    <p className="small-font">Species</p>
                    <p className="cast-info-style">{character.species}</p>
                  </Col>
                  <Col xs={3} className="custom-border p-3 mx-1">
                    <img className="icon-image" src={genderIcon} alt="" />{" "}
                    <br />
                    <p className="small-font">Status</p>
                    <p className="cast-info-style">{character.gender}</p>
                  </Col>

                  <Col xs={12} className="custom-border p-3 mx-auto ">
                    <img className="icon-image" src={originIcon} alt="" />
                    <p className="small-font">Origin</p>
                    <div className="d-flex justify-content-between">
                      <p className="cast-info-style">{character.origin.name}</p>
                      <img src={redirectIcon} alt="" />
                    </div>
                  </Col>

                  <Col xs={12} className="custom-border p-3 mx-auto">
                    <img className="icon-image" src={locationIcon} alt="" />
                    <p className="small-font">Last Known Location</p>
                    <div className="d-flex justify-content-between">
                      <p className="cast-info-style">
                        {character.location.name}
                      </p>
                      <img src={redirectIcon} alt="" />
                    </div>
                  </Col>

                  <Col xs={12} className="custom-border p-3 mx-auto">
                    <img className="icon-image" src={episodeIcon} alt="" />
                    <p className="small-font">Episodes</p>
                    <ul className="cast-info-style">
                      {episodesList.map((episode) => (
                        <EpisodeList
                          key={episode}
                          episode={episode}
                        ></EpisodeList>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
