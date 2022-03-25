import React, { Fragment } from "react";
import BannerItem from "./BannerItem";
import { useMovies } from "../../contexts/movieContext";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieReview from "../movie/MovieReview";

const Banner = () => {
  const { apiKey, handleNavigate, fetcher, swiperRef } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <Fragment>
      {/* <Heading heading={"Movies"}></Heading> */}
      <Swiper
        grabCursor={"true"}
        className="rounded-3xl overflow-hidden page-container"
        slidesPerView={"auto"}
        ref={swiperRef}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem
                data={item}
                onClick={() => handleNavigate("movie", item.id)}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
      <MovieReview></MovieReview>
    </Fragment>
  );
};

export default React.memo(Banner);
