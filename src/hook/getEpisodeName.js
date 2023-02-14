import { useEffect, useState } from "react";

const useEpisodesName = (episodes) => {
  const [episodeList, setEpisodeList] = useState([]);
  let newEpisodeList = [];
  for (const each of episodes) {
    const number = each.split("episode/");
    newEpisodeList.push(number[1]);
  }
  const episedeNumbers = newEpisodeList.join(",");
  //   console.log(episedeNumbers);
  //   console.log(`https://rickandmortyapi.com/api/episode/${newEpisodeList[1]}`);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${episedeNumbers}`)
      .then((res) => res.json())
      .then((data) => setEpisodeList(data));
  }, [episedeNumbers]);
  //   console.log(episodeList);
  return [episodeList, setEpisodeList];
};

export default useEpisodesName;
