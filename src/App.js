import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Main from "./pages/Main";
import MovieDetails from "./pages/Movie/MovieDetails";
import PageNotFound from "./pages/PageNotFound";
import MoviePage from "./pages/Movie/MoviePage";
import ComingSoonMovies from "./pages/ComingSoonMovies";
import MovieWatching from "./pages/Movie/MovieWatching";
import TiviSeriesPage from "./pages/TvSeries/TiviSeriesPage";
import TiviSeriesDetails from "./pages/TvSeries/TiviSeriesDetails";
import TiviSeriesWatching from "./pages/TvSeries/TiviSeriesWatching";
import Scroll from "./components/scroll/Scroll";
import CartMovie from "./pages/Cart/CartMovie";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieID"
            element={<MovieDetails></MovieDetails>}></Route>
          <Route
            path="/watch/:movieID"
            element={<MovieWatching></MovieWatching>}></Route>
          <Route
            path="tvseries"
            element={<TiviSeriesPage></TiviSeriesPage>}></Route>
          <Route
            path="tvseri/:movieID"
            element={<TiviSeriesDetails></TiviSeriesDetails>}></Route>
          <Route
            path="watchtv/:movieID/"
            element={<TiviSeriesWatching></TiviSeriesWatching>}></Route>
          <Route
            path="/comingsoon"
            element={<ComingSoonMovies></ComingSoonMovies>}></Route>
          <Route path="cart" element={<CartMovie></CartMovie>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
      </Routes>
      <Scroll></Scroll>
    </Fragment>
  );
};

export default App;
