import React from "react";

const ButtonPrimary = ({
  children,
  title,
  className = "",
  buttonColor = "bg-primary",
}) => {
  return (
    <button
      className={`px-10 py-3 text-center rounded-xl text-white font-medium hover:opacity-80 transition-all ${buttonColor} ${className}`}
      title={title || ""}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
