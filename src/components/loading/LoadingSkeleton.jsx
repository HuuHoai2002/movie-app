import React from "react";
import "./LoadingSkeleton.scss";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
        borderRadius: props.radius,
      }}></div>
  );
};

export default LoadingSkeleton;
