import React from "react";
import { useMovies } from "../../contexts/movieContext";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonSecondary from "../button/ButtonSecondary";

const BannerItem = ({ data, onClick }) => {
  const { imagesPath } = useMovies();
  return (
    <div className="banner w-full h-[350px] relative select-none rounded-3xl overflow-hidden mb-5">
      <div className="overlay absolute inset-0  bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <div className="w-full">
        <img
          src={`${imagesPath}${data.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover rounded-3xl max-h-[350px]"
        />
      </div>
      <div className="absolute bottom-10 left-10">
        <h1 className="text-3xl font-medium uppercase mb-5 hover:opacity-80 transition-all">
          {data.title}
        </h1>
        <div className="flex items-center gap-x-3">
          <ButtonPrimary onClick={onClick} onSpin={true}>
            Watch
          </ButtonPrimary>
          <ButtonSecondary></ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
