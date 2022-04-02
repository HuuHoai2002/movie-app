import React, { useMemo } from "react";
import ButtonSecondary from "../button/ButtonSecondary";

const User = ({ username, email, userImage }) => {
  return (
    <div className="page-container-review w-full z-10 p-5 border-l border-[#2e2e31] cursor-pointer flex-1">
      <div className="flex items-start flex-col justify-between gap-x-2 bg-[#1e1f24] py-3 px-2 rounded-2xl h-full">
        <div className="flex items-center justify-between gap-x-3">
          <div className="image w-10 h-10 relative">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16758868/media/8a20438ee0cbb3ffaa0108523e7e1875.png"
              alt=""
              className="w-full h-full rounded-full"
            />
            <span className="absolute right-0 bottom-1 w-[10px] h-[10px] rounded-full bg-[#31A14C] border border-white"></span>
          </div>
          <div className="flex flex-col text-sm font-semibold">
            <span>Hữu Hoài</span>
            <span>0963234104</span>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-x-2">
            <div className="item-social flex items-center justify-center p-2 rounded-lg bg-[#39393a] hover:-translate-y-2 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-[#0E8EF1]">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </div>
            <div className="item-social flex items-center justify-center p-2 rounded-lg bg-[#39393a] hover:-translate-y-2 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-5 h-5 fill-red-500">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </div>
            <div className="item-social flex items-center justify-center p-2 rounded-lg bg-[#39393a] hover:-translate-y-2 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-red-500">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
            <div className="item-social flex items-center justify-center p-2 rounded-lg bg-[#39393a] hover:-translate-y-2 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-[#0E8EF1]">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-x-3 items-center">
            <div className="p-2 rounded-full flex items-center justify-center bg-[#39393a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="flex flex-col">
              <span className="text-xs opacity-60">Balance</span>
              <span className="text-sm font-medium text-star" title="Money">
                $ Infinite
              </span>
            </span>
          </div>
          <div>
            <ButtonSecondary
              className={"p-[10px] bg-white !rounded-full opacity-70"}
              iconClassName={"text-[#24252A] w-5 h-5"}></ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
