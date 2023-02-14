import { useEffect, useState } from "react";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return [characters, setCharacters];
};

const useLoc = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
  }, []);
  return [locations, setLocations];
};

const useEpi = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);
  return [episodes, setEpisodes];
};
export { useCharacters, useEpi, useLoc };
