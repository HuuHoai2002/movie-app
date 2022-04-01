import React, { Fragment } from "react";
import BannerItem from "./BannerItem";
import { useMovies } from "../../contexts/movieContext";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieReview from "../movie/MovieReview";
import User from "../user/User";
import BannerLoading from "../loading/BannerLoading";

const Banner = () => {
  const { apiKey, handleNavigate, fetcher, swiperRef } = useMovies();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  const loading = !data && !error;
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
        {loading ? (
          <BannerLoading></BannerLoading>
        ) : (
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem
                data={item}
                onClick={() => handleNavigate("watch", item.id)}></BannerItem>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="page-container-review fixed top-0 !h-full max-w-[100vh] right-0 flex flex-col justify-between">
        <User isLogin={true}></User>
        <MovieReview title={"Popular Movies"} info="top_rated"></MovieReview>
      </div>
    </Fragment>
  );
};

export default React.memo(Banner);
