import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";

export default function MoviePage() {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=273c9de3a548b17ca4aeca62ccaf85c6&language=en-US`
    );
    const movieInfo = await response.json();
    setMovieInfo(movieInfo);
  };

  if (movieInfo.loading || !movieInfo.genres) {
    return <Loading />;
  }

  console.log(movieInfo);

  return (
    <div>
      <p>id: {movieInfo.id}</p>
    </div>
  );
}
