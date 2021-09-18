import React from "react";

const Movie = (id, movie) => {
  const imagen = movie.backdrop_path;
  const description = movie.overview;
  return (
    <div>
      <img src={imagen} />
      <p>{description}</p>
    </div>
  );
};

export default Movie;
