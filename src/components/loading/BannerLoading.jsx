import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const BannerLoading = () => {
  return (
    <div className="banner w-full h-[350px] relative select-none rounded-3xl overflow-hidden mb-5">
      {/* <LoadingSkeleton></LoadingSkeleton> */}
      <div className="absolute bottom-10 left-10">
        <h1 className="text-3xl font-medium uppercase mb-5 hover:opacity-80 transition-all">
          <LoadingSkeleton width="200px" height="25px"></LoadingSkeleton>
        </h1>
        <div className="flex items-center gap-x-3">
          <LoadingSkeleton width="150px" height="45px"></LoadingSkeleton>
          <LoadingSkeleton width="45px" height="45px"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default BannerLoading;
