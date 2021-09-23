import React from "react";
import { Card, Columns, Content, Heading } from "react-bulma-components";
import Loading from "../Loading/Loading";
import "./MovieList.scss";

function movieUrl(backdropPath) {
  return `https://image.tmdb.org/t/p/w500${backdropPath}`;
}

export default function MovieList(props) {
  const { movies } = props;

  if (movies.loading || !movies.results) {
    return <Loading />;
  }

  console.log(movies);
  const results = movies.results;
  return (
    <Columns>
      {results.map(({ backdrop_path, title, overview }) => (
        <Columns.Column size={1} key={title}>
          <Card className="card">
            <Card.Image size="16by9" src={movieUrl(backdrop_path)} />
            <Card.Content>
              <Content>
                <Heading>{title}</Heading>
                <Heading subtitle size={6}>
                  {overview}
                </Heading>
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column>
      ))}
    </Columns>
  );
}
