import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import "./MoviePage.scss";
import { Link } from "react-router-dom";

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

  return <MovieRender movie={movieInfo}></MovieRender>;
}

function MovieRender(props) {
  const {
    movie: {
      poster_path,
      title,
      overview,
      release_date,
      vote_average,
      genres,
      homepage,
      id,
    },
  } = props;
  return (
    <div className="movie-render">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div className="movie-info">
        <h1>{title}</h1>
        <p>
          <b>Description:</b> {overview}
        </p>
        <p>
          <b>Release Date:</b> {release_date}
        </p>
        <p>
          <b>Rating:</b> {vote_average}
        </p>
        <p>
          <b>Genres:</b>
          {genres.map((g) => (
            <i key={g.name}> -{g.name}</i>
          ))}
        </p>
        <p>
          <b>Homepage: </b>
          {""}
          {
            <a href={homepage} target="_blank" rel="noreferrer">
              {" "}
              {homepage}
            </a>
          }
        </p>
        <p>
          {" "}
          <Link to={`/moviepage/movietrailer/${id}`} className="btn btn-dark">
            Trailer
          </Link>
        </p>
      </div>
    </div>
  );
}
