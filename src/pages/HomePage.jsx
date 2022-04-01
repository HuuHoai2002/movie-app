import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  return (
    <Fragment>
      <DashBoard></DashBoard>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
