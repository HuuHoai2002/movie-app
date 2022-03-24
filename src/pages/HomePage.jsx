import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";

const HomePage = () => {
  return (
    <Fragment>
      <DashBoard></DashBoard>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
