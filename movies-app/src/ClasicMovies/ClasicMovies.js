import { Carousel } from "antd";
import React from "react";
import "antd/dist/antd.css";
import ReactDOM from "react-dom";
import Home from "../Home/Home";
import { Button } from "react-bulma-components";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function ClasicMovies() {
  const cargarHome = () => {
    ReactDOM.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  const cargarClasicMovies = () => {
    ReactDOM.render(
      <React.StrictMode>
        <ClasicMovies />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };
  return (
    <>
      <Button type="button" onClick={cargarHome}>
        Home
      </Button>

      <Button type="button" onClick={cargarClasicMovies}>
        ClasicMovies
      </Button>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>5</h3>
        </div>
        <div>
          <h3 style={contentStyle}>6</h3>
        </div>
        <div>
          <h3 style={contentStyle}>7</h3>
        </div>
        <div>
          <h3 style={contentStyle}>8</h3>
        </div>
      </Carousel>
    </>
  );
}
