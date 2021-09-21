import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Button } from "react-bulma-components";

import SliderMovies from "../SliderMovies/SliderMovies";
import ClasicMovies from "../ClasicMovies/ClasicMovies";
import "./Home.scss";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  const cargarHome = () => {
    ReactDOM.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  const cargarClasicMovies = () => {
    ReactDOM.render(
      <React.StrictMode>
        <ClasicMovies />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=273c9de3a548b17ca4aeca62ccaf85c6&language=es-MX&page="
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <>
      <div className="home">
        <Button type="button" onClick={cargarHome}>
          Home
        </Button>

        <Button type="button" onClick={cargarClasicMovies}>
          ClasicMovies
        </Button>

        <SliderMovies movies={movieList} />
      </div>
    </>
  );
}
