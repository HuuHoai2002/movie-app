import React from "react";
import { useMovies } from "../../contexts/movieContext";

const Item = ({ children, text, isActive, activeCart = false }) => {
  const { cartMovie } = useMovies();
  React.useEffect(() => {
    if (isActive) {
      document.title = text;
    }
  });
  return (
    <div className="flex justify-between cursor-pointer transition-all py-1 relative">
      <div className="flex gap-x-2 items-center">
        <div className={`${isActive ? "fill-primary" : "fill-textcolor"}`}>
          {children}
        </div>
        <h2
          className={`${
            isActive
              ? "text-white text-sm transition-all"
              : "text-textcolor text-sm transition-all"
          }`}>
          {text}
        </h2>
      </div>
      <div
        className={`${isActive ? "border-2 border-primary" : "hidden"} `}></div>
      {activeCart ? (
        <div className="absolute right-[40%] rounded-lg w-7 h-5 flex items-center justify-center bg-primary text-sm">
          {cartMovie.length || 0}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Item;
