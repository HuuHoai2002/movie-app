import React from "react";
import MovieItem from "../../components/movie/MovieItem";
import MovieReview from "../../components/movie/MovieReview";
import User from "../../components/user/User";
import { useMovies } from "../../contexts/movieContext";
import { ToastContainer } from "react-toastify";

const CartMovie = () => {
  const { cartMovie, handleSetTitle, deleteFromCart } = useMovies();
  handleSetTitle("Cart");
  console.log(cartMovie);
  return (
    <div className="page-container">
      <div className="page-container-review fixed top-0 !h-full max-w-[100vh] right-0 flex flex-col justify-between">
        <User isLogin={true}></User>
        <MovieReview title={"Popular Movies"} info="top_rated"></MovieReview>
      </div>
      <div className="pb-5">
        <h1 className="font-medium">
          {cartMovie.length > 0
            ? "Movies you have added to your cart"
            : "You have not added any movies to your cart yet"}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {cartMovie.map((item) => (
          <MovieItem
            key={item.id}
            data={item}
            className="!mx-0"
            deleteIcon={true}
            deleteOnClick={() => deleteFromCart(item.id)}></MovieItem>
        ))}
      </div>
      <ToastContainer className={"font-semibold"}></ToastContainer>
    </div>
  );
};

export default CartMovie;
