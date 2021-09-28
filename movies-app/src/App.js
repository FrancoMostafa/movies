import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import TopMovies from "./components/TopMovies/TopMovies";
import PopularMovies from "./components/PopularMovies/PopularMovies";
import Header from "./components/Header/Header";
import MoviePage from "./components/MoviePage/MoviePage";

function App() {
  return (
    <Router>
      <div className="container" className="App">
        <Header />
        <Switch>
          <Route path="/topmovies">
            <TopMovies />
          </Route>
          <Route path="/popularmovies">
            <PopularMovies />
          </Route>
          <Route path="/moviepage/:id">
            <MoviePage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
