import React from "react";
import useSWR from "swr";
import { useMovies } from "../../contexts/movieContext";
import ButtonPrimary from "../button/ButtonPrimary";
import MovieReviewItem from "./MovieReviewItem";
import Loading from "../loading/Loading";

const MovieReview = ({ title, info = "popular" }) => {
  const { apiKey, fetcher, handleNavigate } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${info}?api_key=${apiKey}&page=2`,
    fetcher
  );
  const loading = !data && !error;
  const movies = data?.results || [];
  return (
    <div className="page-container-review w-full z-10 p-5 border-l border-[#24252A]">
      {loading && <Loading></Loading>}
      <h1 className="font-medium mb-5">{title}</h1>
      {movies.length > 0 &&
        movies
          .slice(14, 17)
          .map((item) => (
            <MovieReviewItem data={item} key={item.id}></MovieReviewItem>
          ))}
      <ButtonPrimary
        hideIcon={true}
        className="w-full text-sm"
        onClick={() => handleNavigate("movies")}>
        See More
      </ButtonPrimary>
    </div>
  );
};

export default React.memo(MovieReview);
