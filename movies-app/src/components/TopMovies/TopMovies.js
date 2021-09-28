import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import MovieList from "../MovieList/MovieList";

export default function ClasicMovies() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=273c9de3a548b17ca4aeca62ccaf85c6&language=en-US"
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <>
      <MovieList movies={movieList} />
    </>
  );
}
