import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieTrailer.scss";

export default function MovieTrailer() {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=273c9de3a548b17ca4aeca62ccaf85c6&language=en-US`
    );
    const movieInfo = await response.json();
    setMovieInfo(movieInfo.results[0]);
  };

  const keyvideo = movieInfo.key;

  return (
    <>
      <div className="movie-trailer">
        <div>
          <Link to={`/moviepage/${id}`} className="btn btn-dark">
            Back To The Page
          </Link>
        </div>
        <iframe
          width="853"
          height="505"
          src={`https://www.youtube.com/embed/${keyvideo}?rel=0;&autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
