import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import RatingButton from "../../components/button/RatingButton";
import ButtonHeart from "../../components/button/ButtonHeart";
import { useMovies } from "../../contexts/movieContext";
import MovieDetailsLoading from "../../components/loading/MovieDetailsLoading";

// movie details : https://api.themoviedb.org/3/movie/{movie_id}?api_key=
// credits : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
const TiviSeriesDetails = () => {
  const { movieID } = useParams();
  const { apiKey, imagesPath, handleNavigate, handleSetTitle, fetcher } =
    useMovies();
  handleSetTitle("Tivi Series Details");
  // API details movies
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${movieID}?api_key=${apiKey}`,
    fetcher
  );
  const loading = !data && !error;
  const movies = data || [];
  const {
    name,
    backdrop_path,
    genres,
    overview,
    vote_average,
    number_of_episodes,
  } = movies;
  //Credits
  const { data: dataCredits, error: errorCredits } = useSWR(
    `https://api.themoviedb.org/3/tv/${movieID}/credits?api_key=${apiKey}`,
    fetcher
  );
  const moviesCredit = dataCredits || [];
  const { cast } = moviesCredit;
  console.log(moviesCredit);
  // Reviews
  // const { data: dataReviews, error: errorReviews } = useSWR(
  //   `https://api.themoviedb.org/3/tv/${movieID}/reviews?api_key=${apiKey}`,
  //   fetcher
  // );
  // const moviesReview = dataReviews || [];
  // const { results } = moviesReview;
  // console.log(results);
  return (
    <div className="page-container-movie font-poppins">
      {loading ? (
        <MovieDetailsLoading></MovieDetailsLoading>
      ) : (
        <Fragment>
          <div className="flex gap-x-10 mb-10">
            <div className="max-w-[450px] flex-1">
              <img
                src={`${imagesPath}${backdrop_path}`}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="flex flex-col w-full flex-1 gap-y-5">
              <div className="flex items-center gap-x-10">
                <h1 className="text-2xl font-medium">
                  {name}{" "}
                  <span className="text-textcolor text-base">
                    (Episodes: {number_of_episodes})
                  </span>
                </h1>
                <RatingButton
                  count={vote_average}
                  className={"px-2"}
                  title="Rating"></RatingButton>
              </div>
              <div className="leading-6 text-white text-sm opacity-80">
                {overview}
              </div>
              <div className="">
                <h1 className="text-xl font-medium mb-5">Genres</h1>
                <div className="flex items-center gap-x-10 text-white opacity-80">
                  {genres &&
                    genres.length > 0 &&
                    genres.slice(0, 4).map((item) => (
                      <span
                        className="py-[7px] px-4 text-center text-sm font-semibold rounded-3xl border border-primary leading-none"
                        key={item.id}>
                        {item.name}{" "}
                      </span>
                    ))}
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <ButtonPrimary
                  className={"max-w-[250px] !rounded-3xl mt-auto"}
                  title={"Watch Now"}
                  onClick={() => handleNavigate("watchtv", movieID)}>
                  Watch TV Series
                </ButtonPrimary>
                <ButtonHeart
                  className={"!border-2 border-[#FF6767]"}
                  iconClassName={"fill-[#FF6767]"}></ButtonHeart>
              </div>
            </div>
          </div>
          <div className="mb-10 w-full">
            <h1 className="text-xl font-medium mb-5">Cast</h1>
            <div className="grid grid-cols-4 gap-x-10">
              {cast &&
                cast.length > 0 &&
                cast.slice(0, 4).map((item) => (
                  <div className="w-full h-full" key={item.id}>
                    <h2 className="font-medium text-base text-primary py-2">
                      {item.name}
                    </h2>
                    <img
                      src={`${imagesPath}${item.profile_path}`}
                      alt=""
                      className="w-full h-[300px] object-cover rounded-3xl"
                    />
                  </div>
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default TiviSeriesDetails;
