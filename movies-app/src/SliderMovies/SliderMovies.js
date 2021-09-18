import React, { useState, useEffect } from "react";

import { Carousel } from "antd";

import Loading from "../Loading/Loading";

import Movie from "../Movie/Movie";

import "antd/dist/antd.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function SliderMovies(props) {
  const { movies } = props;

  if (movies.loading || !movies.results) {
    return <Loading />;
  }

  console.log(movies);
  const results = movies.results;
  return (
    <Carousel autoplay>
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}
