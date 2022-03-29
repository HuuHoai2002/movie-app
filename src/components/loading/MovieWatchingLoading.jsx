import React, { Fragment } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const MovieWatchingLoading = () => {
  return (
    <Fragment>
      <h1 className="text-textcolor font-semibold pb-2 flex items-center gap-x-3 w-[250px] h-[20px]">
        <LoadingSkeleton width="250px" height="20px"></LoadingSkeleton>
        <LoadingSkeleton width="50px" height="20px"></LoadingSkeleton>
      </h1>
      <div className="mb-5">
        <div className="h-[600px]">
          <LoadingSkeleton height="600px" radius="24px"></LoadingSkeleton>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-xl font-medium mb-5 w-[250px] h-[20px]">
          <LoadingSkeleton width="250px" height="20px"></LoadingSkeleton>
        </h1>
      </div>
    </Fragment>
  );
};

export default MovieWatchingLoading;
