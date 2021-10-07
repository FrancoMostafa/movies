import "antd/dist/antd.css";
import MovieList from "../MovieList/MovieList";

export default function PopularMovies() {
  return (
    <>
      <MovieList moviesidentification="popular" />
    </>
  );
}
