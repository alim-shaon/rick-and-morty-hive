import React, { useEffect, useState } from "react";

const EpisodeList = ({ episode }) => {
  let list = episode.split("episode/");
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${list[1]}`)
      .then((res) => res.json())
      .then((data) => setEpisodeList(data));
  }, []);

  return <li>{episodeList.name}</li>;
};

export default EpisodeList;
