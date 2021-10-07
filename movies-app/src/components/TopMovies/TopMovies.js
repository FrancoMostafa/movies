import "antd/dist/antd.css";
import MovieList from "../MovieList/MovieList";

export default function ClasicMovies() {
  return (
    <>
      <MovieList moviesidentification="top_rated" />
    </>
  );
}
