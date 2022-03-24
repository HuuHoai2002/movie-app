/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../contexts/movieContext";

const MovieDetails = () => {
  const { movieID } = useParams();
  const { frameEmbed } = useMovies();
  return (
    <div>
      <h1 className="text-center text-2xl text-primary">
        ID Phim vừa ấn: {movieID}
      </h1>
      <div>
        <iframe
          src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieID}`}
          className="w-full h-[600px]"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
