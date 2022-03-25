import React from "react";

const IMDBIcon = ({ className }) => {
  return (
    <div
      className={`py-1 px-2 leading-none font-bold text-base text-black bg-star rounded-md ${className}`}
    >
      IMDb
    </div>
  );
};

export default IMDBIcon;
