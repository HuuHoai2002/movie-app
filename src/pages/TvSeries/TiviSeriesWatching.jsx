/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import WatchTvFrame from "../../components/watch/WatchTvFrame";
import { useMovies } from "../../contexts/movieContext";
import Loading from "../../components/loading/Loading";
import TiviPaginition from "../../components/movie/TiviPaginition";

const TiviSeriesWatching = () => {
  // episode
  const [episode, setEpisode] = useState(1);
  // active episode
  const [active, setActive] = useState(0);
  // console.log(episode);
  const { movieID } = useParams();
  const { apiKey, handleSetTitle, fetcher } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${movieID}?api_key=${apiKey}`,
    fetcher
  );
  const movies = data || [];
  const loading = !data && !error;
  const { name, number_of_episodes, first_air_date } = movies;
  handleSetTitle("Watching: " + name || "No");
  return (
    <div className="page-container-movie">
      <h1 className="text-textcolor font-semibold pb-2">
        Playing: {name} ({new Date(first_air_date).getFullYear()}) ,{" "}
        <span className="pl-5">
          Episode: <span className="text-primary opacity-80">{episode}</span>/
          <span>{number_of_episodes}</span>
        </span>
      </h1>
      {loading ? (
        <Loading></Loading>
      ) : (
        <WatchTvFrame movieID={movieID} episode={episode}></WatchTvFrame>
      )}
      <h2 className="font-medium text-secondary py-5">Choose Episode</h2>
      <div className="flex items-center gap-x-2 mb-5 flex-wrap transition-all">
        {new Array(number_of_episodes).fill(0).map((item, index) => (
          <p
            className="w-[60px] h-7 mb-2 flex items-center justify-center font-semibold text-sm rounded-2xl border border-primary cursor-pointer leading-none hover:opacity-50"
            style={index === active ? { backgroundColor: "#D22F27" } : {}}
            key={index}
            title={`Watch Episode ${index + 1}`}
            onClick={() => {
              setEpisode(index + 1);
              setActive(index);
            }}>
            {index + 1}
          </p>
        ))}
      </div>
      {/* Xem gần hết phim thì mới gợi ý */}
      {episode === number_of_episodes ? (
        <div className="w-full">
          <h1 className="text-xl font-medium mb-5">Similar TV Series</h1>
          <TiviPaginition movieID={movieID} info="similar"></TiviPaginition>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default TiviSeriesWatching;
