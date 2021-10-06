import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import "./MoviePage.scss";
import { Button } from "react-bulma-components";
import { Modal } from "antd";
import ReactPlayer from "react-player";

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
        <MovieTrailerRP id={id} />
      </div>
    </div>
  );
}

function MovieTrailerRP(props) {
  const { id } = props;

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

  if (movieInfo.loading || !movieInfo) {
    return <Loading />;
  }

  const keyvideo = movieInfo.key;

  return <ModalTrailer keyvideo={keyvideo} />;
}

function ModalTrailer(props) {
  const { keyvideo } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button onClick={showModal} className="btn btn-dark">
        Trailer
      </Button>
      <Modal
        style={{ top: 20 }}
        width="690px"
        bodyStyle={{
          backgroundColor: "gray",
        }}
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReactPlayer
          width="640px"
          height="360px"
          controls="true"
          url={`https://www.youtube.com/embed/${keyvideo}?controls=1`}
        />
        <Button
          onClick={handleCancel}
          className="btn btn-dark
        "
        >
          Back
        </Button>
      </Modal>
    </div>
  );
}
