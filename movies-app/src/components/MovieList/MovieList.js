import React from "react";
import Loading from "../Loading/Loading";
import "./MovieList.scss";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";

export default function MovieList(props) {
  const { movies } = props;

  if (movies.loading || !movies.results) {
    return <Loading />;
  }

  const results = movies.results;
  return (
    <div className="movielist">
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
