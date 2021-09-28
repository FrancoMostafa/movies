import React, { useState, useEffect } from "react";
import SliderMovies from "../SliderMovies/SliderMovies";
import "./Home.scss";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=273c9de3a548b17ca4aeca62ccaf85c6&language=EN&page="
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <>
      <div className="home">
        <SliderMovies movies={movieList} />
      </div>
    </>
  );
}
