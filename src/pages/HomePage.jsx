import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  return (
    <Fragment>
      <DashBoard></DashBoard>
      <ToastContainer
        className={"font-semibold text-[#191A1F] text-base"}></ToastContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
