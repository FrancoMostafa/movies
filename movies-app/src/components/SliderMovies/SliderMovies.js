import { Carousel } from "antd";

import Loading from "../Loading/Loading";

import "antd/dist/antd.css";
import MovieSlider from "../MovieSlider/MovieSlider";

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
        <MovieSlider key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}
