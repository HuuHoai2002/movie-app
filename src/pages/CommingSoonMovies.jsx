import React from "react";
import MoviePaginition from "../components/movie/MoviePaginition";

const CommingSoonMovies = () => {
  return (
    <div className="page-container-movie">
      <MoviePaginition movieID={"upcoming"}></MoviePaginition>
    </div>
  );
};

export default React.memo(CommingSoonMovies);
