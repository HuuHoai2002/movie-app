import React from "react";
import { createPortal } from "react-dom";

const Scroll = () => {
  const handleScrollToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return createPortal(
    <div
      className="fixed bottom-5 right-5 z-50 bg-primary p-1 rounded-full opacity-20 cursor-pointer hover:opacity-100 transition-all"
      onClick={handleScrollToTop}
      title="Scroll to top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>,
    document.getElementById("root")
  );
};

export default Scroll;
