import React from "react";
import { useMovies } from "../../contexts/movieContext";
import RatingButton from "../button/RatingButton";

const MovieReviewItem = ({ data }) => {
  const { imagesPath, handleNavigate } = useMovies();
  return (
    <div
      className="grid grid-cols-2 mb-5 cursor-pointer rounded-xl overflow-hidden"
      onClick={() => handleNavigate("watch", data.id)}>
      <img
        src={`${imagesPath}${data.backdrop_path}`}
        alt=""
        className="w-full h-[80px] object-cover rounded-xl transition-all hover:scale-90 overflow-hidden"
      />
      <div className="flex items-start flex-col gap-y-2 pl-2">
        <h1 className="text-xs flex-1 font-medium">{data.title}</h1>
        <div className="flex items-start gap-x-2 mt-auto">
          <RatingButton count={data.vote_average}></RatingButton>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieReviewItem);
