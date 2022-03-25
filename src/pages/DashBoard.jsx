import React from "react";
import { NavLink } from "react-router-dom";
import DashBoardItem from "../components/dashboard/DashBoardItem";
import Item from "../components/dashboard/Item";

const DashBoard = () => {
  return (
    <div className="fixed top-0 left-0 w-full max-w-[180px] h-screen pl-5 border-r border-[#24252A]">
      <h1 className="font-semibold mb-10 mt-5 flex gap-x-2 items-center">
        <div className="leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6 fill-primary"
          >
            <path d="M210.13,45.87C94.07,45.87,0,140,0,256S94.07,466.13,210.13,466.13,420.29,372,420.29,256,326.22,45.87,210.13,45.87Zm3.89,56a50.94,50.94,0,1,1-51,50.95A51,51,0,0,1,214,101.9Zm-97.07,199a50.93,50.93,0,1,1,50.9-51A51,51,0,0,1,116.94,300.86ZM214,397.93A50.94,50.94,0,1,1,265,347,51,51,0,0,1,214,397.93Zm97.1-97.07a50.93,50.93,0,1,1,50.9-51A51,51,0,0,1,311.11,300.86Z" />
            <path d="M511.42,450.86s-96.49-5.21-91.65-87.51c0,0-16.4,40.59-38.19,55.09C408.18,437.86,430.1,460,512,457.7Z" />
          </svg>
        </div>
        <div>
          <span>Movies App</span>
          <span className="text-primary font-bold text-2xl leading-none">
            .
          </span>
        </div>
      </h1>
      <DashBoardItem title={"MENU"}>
        <NavLink to={"/"}>
          {({ isActive }) => (
            <Item text={"Home"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Item>
          )}
        </NavLink>
        <NavLink to={"/movies"}>
          {({ isActive }) => (
            <Item text={"Movies"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </Item>
          )}
        </NavLink>
        <NavLink to={"/tvseries"}>
          {({ isActive }) => (
            <Item text={"TV Series"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5"
              >
                <path d="M512 448H127.1C110.3 448 96 462.3 96 479.1S110.3 512 127.1 512h384C529.7 512 544 497.7 544 480S529.7 448 512 448zM592 0h-544C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h544c26.5 0 48-21.5 48-48v-320C640 21.5 618.5 0 592 0zM576 352H64v-288h512V352z" />
              </svg>
            </Item>
          )}
        </NavLink>
        <NavLink to={"/commingsoon"}>
          {({ isActive }) => (
            <Item text={"Comming Soon"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </Item>
          )}
        </NavLink>
      </DashBoardItem>
      <DashBoardItem title={"SOCIAL"}>
        <NavLink to={"/friends"}>
          {({ isActive }) => (
            <Item text={"Friends"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5"
              >
                <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
              </svg>
            </Item>
          )}
        </NavLink>
      </DashBoardItem>
      <DashBoardItem title={"GENERAL"}>
        <NavLink to={"/setting"}>
          {({ isActive }) => (
            <Item text={"Setting"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5"
              >
                <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
              </svg>
            </Item>
          )}
        </NavLink>
        <NavLink to={"/logout"}>
          {({ isActive }) => (
            <Item text={"Log Out"} isActive={isActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5"
              >
                <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
              </svg>
            </Item>
          )}
        </NavLink>
      </DashBoardItem>
    </div>
  );
};

export default DashBoard;
