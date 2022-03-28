/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MoviePaginition from "../../components/movie/MoviePaginition";
import { useMovies } from "../../contexts/movieContext";

const MovieWatching = () => {
  const { movieID } = useParams();
  const { frameEmbed, fetcher, apiKey, handleSetTitle } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`,
    fetcher
  );
  const movies = data || [];
  const { title, backdrop_path, genres, overview, vote_average, release_date } =
    movies;
  console.log("Movie Details id: " + movieID);
  handleSetTitle("Watching: " + title);
  return (
    <div className="page-container-movie">
      <h1 className="text-textcolor font-semibold pb-2">
        Playing: {title} ({new Date(release_date).getFullYear()})
      </h1>
      <div className="mb-5">
        <iframe
          src={`${frameEmbed}${movieID}`}
          className="w-full h-[600px] object-cover rounded-3xl"
          frameBorder="0"
          allowFullScreen={true}></iframe>
      </div>
      <div className="w-full">
        <h1 className="text-xl font-medium mb-5">Similar Movies</h1>
        <MoviePaginition movieID={movieID} info="similar"></MoviePaginition>
      </div>
    </div>
  );
};

export default MovieWatching;
