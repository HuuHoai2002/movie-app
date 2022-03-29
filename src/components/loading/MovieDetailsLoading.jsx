import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const MovieDetailsLoading = () => {
  return (
    <div className="">
      <div className="flex gap-x-10 mb-10">
        <div className="w-[450px] h-[340px] flex-1">
          <LoadingSkeleton
            height="340px"
            width="100%"
            radius="24px"></LoadingSkeleton>
        </div>
        <div className="flex flex-col w-full flex-1 gap-y-5">
          <div className="flex items-center gap-x-10 h-[30px]">
            <h1 className="text-2xl font-medium w-[200px] h-[30px]">
              <LoadingSkeleton width="200px" height="30px"></LoadingSkeleton>
            </h1>
            <LoadingSkeleton width="40px" height="30px"></LoadingSkeleton>
          </div>
          <div className="leading-6 text-white text-sm opacity-80 flex flex-col gap-y-2 h-5">
            <LoadingSkeleton height="20px"></LoadingSkeleton>
            <LoadingSkeleton height="20px"></LoadingSkeleton>
            <LoadingSkeleton height="20px"></LoadingSkeleton>
            <LoadingSkeleton height="20px"></LoadingSkeleton>
            <LoadingSkeleton height="20px"></LoadingSkeleton>
          </div>
          <div className="">
            <h1 className="text-xl font-medium mb-5">
              <LoadingSkeleton width="50px" height="30px"></LoadingSkeleton>
            </h1>
            <div className="flex items-center gap-x-10 text-white opacity-80">
              <LoadingSkeleton width="70px" height="30px"></LoadingSkeleton>
              <LoadingSkeleton width="70px" height="30px"></LoadingSkeleton>
              <LoadingSkeleton width="70px" height="30px"></LoadingSkeleton>
              <LoadingSkeleton width="70px" height="30px"></LoadingSkeleton>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <LoadingSkeleton width="250px" height="40px"></LoadingSkeleton>
            <LoadingSkeleton
              width="40px"
              height="40px"
              radius="100rem"></LoadingSkeleton>
          </div>
        </div>
      </div>
      {/* Cast */}
      <div className="mb-10 w-full">
        <h1 className="text-xl font-medium mb-5">Cast</h1>
        <div className="grid grid-cols-4 gap-x-10 h-[250px]">
          <LoadingSkeleton height="250px" radius="24px"></LoadingSkeleton>
          <LoadingSkeleton height="250px" radius="24px"></LoadingSkeleton>
          <LoadingSkeleton height="250px" radius="24px"></LoadingSkeleton>
          <LoadingSkeleton height="250px" radius="24px"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsLoading;
