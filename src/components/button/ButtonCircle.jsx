import React from "react";

const ButtonCircle = ({
  title = "",
  className = "",
  changeType = false,
  state = true,
  isNext,
  onClick,
}) => {
  return (
    <button
      className={`group flex items-center justify-center p-3 border ${
        state ? "" : "border-borderLight"
      } rounded-full transition-all ${className}`}
      title={title}
      onClick={onClick}
    >
      {changeType ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={` ${state ? "fill-textDark" : "fill-secondary"} w-5 h-5`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={` ${state ? "fill-textDark" : "fill-secondary"} w-5 h-5`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default ButtonCircle;
