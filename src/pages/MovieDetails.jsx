import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ButtonPrimary from "../components/button/ButtonPrimary";
import RatingButton from "../components/button/RatingButton";
import MoviePaginition from "../components/movie/MoviePaginition";
import UserComments from "../components/user/UserComments";
import { useMovies } from "../contexts/movieContext";

// movie details : https://api.themoviedb.org/3/movie/{movie_id}?api_key=
// credits : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
const MovieDetails = () => {
  const { movieID } = useParams();
  const { apiKey, imagesPath, handleNavigate, fetcher } = useMovies();
  // API details movies
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`,
    fetcher
  );
  const movies = data || [];
  const { title, backdrop_path, genres, overview, vote_average } = movies;

  //Credits
  const { data: dataCredits, error: errorCredits } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}`,
    fetcher
  );
  const moviesCredit = dataCredits || [];
  const { cast } = moviesCredit;

  // Reviews
  const { data: dataReviews, error: errorReviews } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${apiKey}`,
    fetcher
  );
  const moviesReview = dataReviews || [];
  const { results } = moviesReview;
  console.log(results);
  return (
    <div className="page-container-movie font-poppins">
      <div className="flex gap-x-10 mb-10">
        <div className="max-w-[450px] flex-1">
          <img
            src={`${imagesPath}${backdrop_path}`}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col w-full flex-1 gap-y-5">
          <div className="flex items-center gap-x-[150px]">
            <h1 className="text-3xl font-medium">{title}</h1>
            <RatingButton
              count={vote_average}
              className={"px-2"}
              title="Rating"></RatingButton>
          </div>
          <div className="leading-6 text-white opacity-80">{overview}</div>
          <div className="">
            <h1 className="text-xl font-semibold mb-5">Actors</h1>
            <div className="flex items-center gap-x-[50px] text-white opacity-80">
              {cast &&
                cast.length > 0 &&
                cast
                  .slice(0, 4)
                  .map((item) => <span key={item.id}>{item.name} </span>)}
            </div>
          </div>
          <ButtonPrimary
            className={"max-w-[220px] !rounded-3xl mt-auto"}
            title={"Watch Now"}
            onClick={() => handleNavigate("watch", movieID)}>
            Watch Movie
          </ButtonPrimary>
        </div>
      </div>
      <div className="mb-5 w-full">
        <h1 className="text-xl font-medium mb-5">Reviews</h1>
        {results &&
          results.length > 0 &&
          results.map((item) => (
            <UserComments data={item} key={item.id}></UserComments>
          ))}
      </div>
      <div className="w-full">
        <h1 className="text-xl font-medium mb-5">Similar Movies</h1>
        <MoviePaginition type={movieID} similar={true}></MoviePaginition>
      </div>
    </div>
  );
};

export default MovieDetails;
