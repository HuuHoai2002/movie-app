import React, { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const movieContext = createContext();

const MovieProvider = ({ children }) => {
  const apiKey = "26a7d8afe9f82facc441f01c4235b0a5";
  const frameEmbed = "https://2embed.ru/embed/tmdb/movie?id=";
  const imagesPath = "https://image.tmdb.org/t/p/original";
  const imagesPathToWidth = "https://image.tmdb.org/t/p/w";
  const searchMoviePath =
    "https://api.themoviedb.org/3/search/movie?api_key=26a7d8afe9f82facc441f01c4235b0a5&query=";
  const searchTvSeriesPath =
    "https://api.themoviedb.org/3/search/tv?api_key=26a7d8afe9f82facc441f01c4235b0a5&query=";

  const navigate = useNavigate();
  const handleNavigate = (path, movieID) => {
    navigate(`/${path}${movieID ? "/" + movieID : ""}`);
  };
  const handleNavigateTV = (path, movieID, Episode) => {
    navigate(`/${path}/${movieID}/${Episode}`);
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const handleSetTitle = (title) => {
    document.title = title;
  };

  const inputRef = useRef();

  const [onDark, setOnDark] = useState(false);
  const handleSetDarkMode = () => {
    setOnDark(!onDark);
  };
  // Store Movies
  const [storedValue, setValue] = useLocalStorage("movie", 0);
  const [cartMovie, setCartMovie] = useState(storedValue || []);
  const showToastError = () =>
    toast.warning("The movie already exists in the shopping cart");
  const showToastAddSuccess = () => toast.success("Add to cart successfully");
  //ADD
  const addToCart = (data) => {
    const newCart = [...cartMovie];
    const filter = newCart.some((item) => item.id === data.id);
    if (!filter) {
      newCart.push(data);
      setValue(newCart);
      setCartMovie(newCart);
      showToastAddSuccess();
    } else {
      showToastError();
    }
  };
  const showToastDeleteSuccess = () =>
    toast.success("You just removed a movie from your cart");
  //DELETE
  const deleteFromCart = (movieID) => {
    const newCart = cartMovie.filter((item) => item.id !== movieID);
    setValue(newCart);
    setCartMovie(newCart);
    showToastDeleteSuccess();
  };
  const value = {
    apiKey,
    frameEmbed,
    imagesPath,
    imagesPathToWidth,
    handleNavigate,
    handleNavigateTV,
    fetcher,
    searchMoviePath,
    searchTvSeriesPath,
    handleSetTitle,
    inputRef,
    onDark,
    handleSetDarkMode,
    cartMovie,
    addToCart,
    deleteFromCart,
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
