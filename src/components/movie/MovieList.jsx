import React from "react";
import useSWR from "swr";
import { useMovies } from "../../contexts/movieContext";
import MovieItem from "./MovieItem";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import ButtonCircle from "../button/ButtonCircle";

const MovieList = ({ title, info = "top_rated" }) => {
  const { apiKey, fetcher } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${info}?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results || [];
  const swiperRef = React.useRef(null);
  return (
    <div className="movie-list">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-xl mb-5">{title}</h1>
        <div className="flex items-center gap-x-2">
          <ButtonCircle
            className="p-1 hover:opacity-50"
            onClick={() => swiperRef.current.swiper.slidePrev()}></ButtonCircle>
          <ButtonCircle
            className="p-1 hover:opacity-50"
            changeType={true}
            onClick={() => swiperRef.current.swiper.slideNext()}
            isNext={true}></ButtonCircle>
        </div>
      </div>
      <Swiper
        grabCursor={"true"}
        slidesPerView={"auto"}
        navigation={true}
        ref={swiperRef}
        className="rounded-lg">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem data={item}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default React.memo(MovieList);
