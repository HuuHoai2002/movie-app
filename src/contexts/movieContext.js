import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const movieContext = createContext();

const MovieProvider = ({ children }) => {
  const apiKey = "26a7d8afe9f82facc441f01c4235b0a5";
  const frameEmbed = "https://2embed.org/embed/movie?tmdb=";
  const imagesPath = "https://image.tmdb.org/t/p/original/";
  const imagesPathToWidth = "https://image.tmdb.org/t/p/w";
  const searchMoviePath =
    "https://api.themoviedb.org/3/search/movie?api_key=26a7d8afe9f82facc441f01c4235b0a5&query=";
  const navigate = useNavigate();
  const handleNavigate = (path, movieID) => {
    navigate(`/${path}/${movieID}`);
  };
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const value = {
    apiKey,
    frameEmbed,
    imagesPath,
    imagesPathToWidth,
    handleNavigate,
    fetcher,
    searchMoviePath,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(movieContext);
  if (typeof context === "undefined") {
    throw new Error("You count must be used within a Movies Provider");
  }
  return context;
};

export { useMovies, MovieProvider };
