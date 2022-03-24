import React from "react";
import BannerItem from "./BannerItem";
import { useMovies } from "../../contexts/movieContext";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
const Banner = () => {
  const { apiKey, handleNavigate, fetcher } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  const loading = !data && !error;
  console.log(movies);
  return (
    <Swiper
      grabCursor={"true"}
      className="rounded-3xl overflow-hidden page-container"
      slidesPerView={"auto"}
    >
      {movies.length > 0 &&
        movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem
              data={item}
              onClick={() => handleNavigate("movie", item.id)}
            ></BannerItem>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default React.memo(Banner);
