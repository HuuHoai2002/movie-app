import React from "react";
import MoviePagination from "../components/movie/MoviePagination";

const CommingSoonMovies = () => {
  return (
    <div className="page-container-movie">
      <MoviePagination movieID={"upcoming"}></MoviePagination>
    </div>
  );
};

export default React.memo(CommingSoonMovies);
