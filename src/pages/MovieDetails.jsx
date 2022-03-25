/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../contexts/movieContext";

const MovieDetails = () => {
  const { movieID } = useParams();
  const { frameEmbed } = useMovies();
  return (
    <div className="page-container-movie">
      <div>
        <iframe
          src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieID}`}
          className="w-full h-[600px] object-cover rounded-3xl"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
