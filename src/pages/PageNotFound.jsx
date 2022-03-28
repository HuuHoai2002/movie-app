import React from "react";
import { useMovies } from "../contexts/movieContext";

const PageNotFound = () => {
  const { handleSetTitle, handleNavigate } = useMovies();
  handleSetTitle("Page Not Found");
  return (
    <div className="text-3xl text-center font-bold text-red-600">
      Error 404 : Page Not Found
      <h2 className="text-xl pt-20">
        Có thể đường dẫn lỗi, xin kiểm tra lại hoặc đợi chúng tôi kiểm tra và
        khắc phục , xin cảm ơn!
      </h2>
      <button
        className="py-2 px-4 text-sm text-white font-semibold bg-primary rounded-lg mt-10"
        onClick={() => handleNavigate("movies")}>
        Ấn để tìm thêm phim
      </button>
    </div>
  );
};

export default PageNotFound;
