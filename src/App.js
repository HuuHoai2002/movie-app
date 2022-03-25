import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Main from "./pages/Main";
import MovieDetails from "./pages/MovieDetails";
import PageNotFound from "./pages/PageNotFound";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieID"
            element={<MovieDetails></MovieDetails>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
