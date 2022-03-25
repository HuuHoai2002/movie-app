import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";
import Section from "../components/section/Section";

const Main = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <Section>
        <MovieList title={"Favorites"}></MovieList>
      </Section>
      <Section>
        <MovieList title={"Now Playing"} info="now_playing"></MovieList>
      </Section>
    </Fragment>
  );
};

export default Main;
