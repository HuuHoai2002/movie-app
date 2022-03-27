/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const WatchTvFrame = ({ movieID, episode }) => {
  return (
    <div className="w-full h-[600px]">
      <iframe
        id="iframe"
        src={`https://www.2embed.ru/embed/tmdb/tv?id=${movieID}&s=1&e=${episode}`}
        className="rounded-3xl"
        width="100%"
        height="100%"
        allowFullScreen={true}
        frameBorder="0"></iframe>
    </div>
  );
};

export default WatchTvFrame;
