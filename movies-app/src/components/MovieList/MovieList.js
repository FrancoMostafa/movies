import { useState, useEffect } from "react";
import React from "react";
import Loading from "../Loading/Loading";
import "./MovieList.scss";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import Pagination from "@mui/material/Pagination";

export default function MovieList(props) {
  const { moviesidentification } = props;

  const [movieList, setMovieList] = useState([]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    obtenerDatos();
  }, [page]);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesidentification}?api_key=273c9de3a548b17ca4aeca62ccaf85c6&language=EN&page=${page}`
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  if (movieList.loading || !movieList.results) {
    return <Loading />;
  }

  const results = movieList.results;

  return (
    <div className="movielist">
      <Pagination count={50} page={page} onChange={handleChange} />
      <List
        itemLayout="horizontal"
        dataSource={results}
        renderItem={(movie) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
              }
              title={<Link to={`/moviepage/${movie.id}`}>{movie.title}</Link>}
            />
            <Link to={`/moviepage/${movie.id}`}>
              <Button type="primary" shape="circle">
                <CaretRightOutlined />
              </Button>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}

function pageCharge(props) {}
