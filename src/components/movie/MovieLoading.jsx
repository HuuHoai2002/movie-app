import React from "react";
import MovieLoadingItem from "../loading/MovieLoadingItem";

const MovieLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5">
      <MovieLoadingItem></MovieLoadingItem>
      <MovieLoadingItem></MovieLoadingItem>
      <MovieLoadingItem></MovieLoadingItem>
      <MovieLoadingItem></MovieLoadingItem>
    </div>
  );
};

export default MovieLoading;
