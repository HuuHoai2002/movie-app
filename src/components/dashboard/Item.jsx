import React from "react";

const Item = ({ children, text, isActive }) => {
  return (
    <div className="flex justify-between cursor-pointer transition-all p-1">
      <div className="flex gap-x-2 items-center">
        <div className={`${isActive ? "fill-primary" : "fill-textcolor"}`}>
          {children}
        </div>
        <h2
          className={`${
            isActive
              ? "text-white text-sm transition-all"
              : "text-textcolor text-sm transition-all"
          }`}
        >
          {text}
        </h2>
      </div>
      <div
        className={`${isActive ? "border-2 border-primary" : "hidden"} `}
      ></div>
    </div>
  );
};
export default Item;
