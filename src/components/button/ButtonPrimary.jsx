import React from "react";

const ButtonPrimary = ({
  children,
  title,
  className = "",
  buttonColor = "bg-primary",
  onClick,
  onSpin = false,
  hideIcon = false,
}) => {
  return (
    <button
      className={`group px-8 py-[9px] flex items-center justify-center gap-x-3 rounded-xl text-white font-medium hover:opacity-80 transition-all ${buttonColor} ${className} `}
      title={title || ""}
      onClick={onClick}>
      {children}
      {!hideIcon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`w-5 h-5 ${onSpin ? "group-hover:animate-spin" : ""}`}>
          <path
            fill="#fff"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
          />
        </svg>
      ) : (
        ""
      )}
    </button>
  );
};

export default ButtonPrimary;
