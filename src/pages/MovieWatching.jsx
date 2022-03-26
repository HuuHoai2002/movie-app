/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { useMovies } from "../contexts/movieContext";

const MovieWatching = () => {
  const { movieID } = useParams();
  const { frameEmbed, fetcher, apiKey } = useMovies();
  // const { data, error } = useSWR(
  //   `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`,
  //   fetcher
  // );
  // const movies = data || [];
  // const { title, backdrop_path, genres, overview, vote_average } = movies;
  // console.log("Movie Details id: " + movieID);
  return (
    <div className="page-container-movie">
      <div>
        <iframe
          src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieID}`}
          className="w-full h-[600px] object-cover rounded-3xl"
          frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default MovieWatching;
