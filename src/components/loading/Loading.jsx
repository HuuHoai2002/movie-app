import React from "react";

const Loading = ({ className }) => {
  return (
    <div
      className={`w-5 h-5 flex items-center justify-center border-2 rounded-full border-primary border-t-transparent transition-all animate-spin ${className}`}></div>
  );
};

export default Loading;
