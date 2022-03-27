import React from "react";
import { useMovies } from "../../contexts/movieContext";
import ButtonPrimary from "../button/ButtonPrimary";
import RatingButton from "../button/RatingButton";

const TiviSeriesItem = ({ data, className = "", imgClassName }) => {
  const { handleNavigate, imagesPath } = useMovies();
  return (
    <div
      className={`${className} movie-card rounded-lg p-2 bg-[#191A1F] border border-[#24252A] relative h-full flex flex-col select-none gap-3 mx-2 overflow-hidden`}>
      <img
        src={`${imagesPath}${data.poster_path}`}
        alt=""
        className={`${imgClassName} w-full h-[150px] rounded-lg object-cover cursor-pointer`}
        onClick={() => handleNavigate("tvseri", data.id)}
      />
      <div className="flex flex-col flex-1 gap-3">
        <h3 className="text-white text-sm font-medium">{data.name}</h3>
        <div className="flex items-center justify-between text-white text-sm mb-2">
          <span className="opacity-50">
            {new Date(data.first_air_date).getFullYear() || "No"}
          </span>
          <span className="flex items-center gap-x-3">
            <RatingButton
              count={data.vote_average.toFixed(1) || 0}></RatingButton>
          </span>
        </div>
        <div className="mt-auto">
          <ButtonPrimary
            className="py-2 w-full !rounded-lg"
            title="Watch Now"
            onClick={() => handleNavigate("watchtv", data.id)}>
            Watch Now
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TiviSeriesItem);
