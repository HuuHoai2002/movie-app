import React from "react";

const DashBoardItem = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-y-5 mb-10">
      <span className="font-semibold text-sm text-borderLight lg:hidden">{title}</span>
      {children}
    </div>
  );
};

export default DashBoardItem;
