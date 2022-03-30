import React from "react";
import "./Loading.scss";
import { createPortal } from "react-dom";

const Loading = () => {
  return createPortal(
    <div className="dashed-loading top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 transition-all"></div>,
    document.getElementById("root")
  );
};

export default Loading;
