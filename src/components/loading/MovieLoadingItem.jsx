import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const MovieLoadingItem = () => {
  return (
    <div
      className={`movie-card rounded-lg p-2 border border-[#24252A] relative h-full w-full flex flex-col select-none gap-3 mx-2 overflow-hidden`}>
      <LoadingSkeleton height="150px"></LoadingSkeleton>
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-white text-sm font-medium">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between text-white text-sm">
          <span className="opacity-50">
            <LoadingSkeleton width="40px" height="20px"></LoadingSkeleton>
          </span>
          <span className="flex items-center gap-x-3">
            <LoadingSkeleton width="40px" height="20px"></LoadingSkeleton>
          </span>
        </div>
        <div className="mt-auto">
          <LoadingSkeleton height="30px"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default MovieLoadingItem;
