import React from "react";
import { useCharacters } from "../../hook/loadData";
import Cast from "../Cast/Cast";
import Header from "../Header/Header";
import "./CastList.css";

const CastList = () => {
  const [characters] = useCharacters([]);
  return (
    <div>
      <div className="cast-list-container">
        <Header></Header>
        <div className="cast-list-bg-1"></div>
        <div className="cast-list-bg-2"></div>
        <div className="px-5 mx-5">
          <h1>The Cast</h1>
          <div className="cast-list my-5">
            {characters.map((character) => (
              <Cast key={character.id} cast={character}></Cast>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastList;
