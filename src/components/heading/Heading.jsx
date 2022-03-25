import React, { Fragment } from "react";

const Heading = ({ heading }) => {
  return (
    <Fragment>
      <h2 className="font-medium text-primary page-container p-1 text-sm">{heading}</h2>
    </Fragment>
  );
};

export default Heading;
