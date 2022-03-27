import React from "react";
import { useMovies } from "../contexts/movieContext";

const PageNotFound = () => {
  const { handleSetTitle } = useMovies();
  handleSetTitle("Page Not Found");
  return (
    <div className="text-3xl text-center font-bold text-red-600">
      Error 404 : Page Not Found
      <h2 className="text-xl pt-20">
        Có thể đường dẫn lỗi, xin kiểm tra lại hoặc đợi chúng tôi kiểm tra và
        khắc phục , xin cảm ơn!
      </h2>
    </div>
  );
};

export default PageNotFound;
