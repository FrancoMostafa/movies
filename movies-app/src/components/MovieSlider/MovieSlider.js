import React from "react";

import "./MovieSlider.scss";

function MovieSlider(props) {
  const {
    movie: { backdrop_path, title, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <>
      <div
        className="image"
        style={{ backgroundImage: `url('${backdropPath}')` }}
      >
        <div className="movie-info">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
}

export default MovieSlider;
