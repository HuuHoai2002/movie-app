import React from "react";

const Section = ({ children }) => {
  return <div className="page-container mb-5">{children}</div>;
};

export default React.memo(Section);
