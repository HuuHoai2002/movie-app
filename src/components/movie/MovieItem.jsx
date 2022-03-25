import React from "react";
import { useMovies } from "../../contexts/movieContext";
import ButtonPrimary from "../button/ButtonPrimary";
import IMDBIcon from "../button/IMDBIcon";

const MovieItem = ({ data, className, imgClassName }) => {
  const { handleNavigate, imagesPath } = useMovies();
  return (
    <div
      className={`${className} movie-card rounded-lg p-2 bg-[#191A1F] border border-[#24252A] relative h-full flex flex-col select-none gap-2 mx-2 overflow-hidden`}
    >
      <img
        src={`${imagesPath}${data.poster_path}`}
        alt=""
        className={`${imgClassName} w-full h-[150px] rounded-lg object-cover`}
      />
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-white text-sm font-medium">{data.title}</h3>
        <div className="flex items-center justify-between text-white text-sm">
          <span className="opacity-50">
            {new Date(data.release_date).getFullYear() || "No"}
          </span>
          <span className="flex items-center gap-x-3">
            <IMDBIcon className={"text-sm font-bold"}></IMDBIcon>
            {data.vote_average || 0}
          </span>
        </div>
        <div className="mt-auto">
          <ButtonPrimary
            className="py-2 w-full !rounded-lg"
            onClick={() => handleNavigate("movie", data.id)}
          >
            Watch Now
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;