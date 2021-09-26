import React from "react";
import Loading from "../Loading/Loading";
import "./MovieList.scss";
import { List, Avatar } from "antd";

export default function MovieList(props) {
  const { movies } = props;

  if (movies.loading || !movies.results) {
    return <Loading />;
  }

  console.log(movies);
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
              title={<b>{movie.title}</b>}
              description={
                <i>
                  {
                    <i>
                      <b>Description:</b> {movie.overview}
                    </i>
                  }
                  <p></p>
                  {
                    <i>
                      <b>Rating:</b> {movie.vote_average}
                    </i>
                  }
                  <p></p>
                  {
                    <i>
                      <b>Release Date: </b>
                      {movie.release_date}
                    </i>
                  }
                </i>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}
