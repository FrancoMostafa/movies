import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import ClasicMovies from "./ClasicMovies/ClasicMovies";
import PopularMovies from "./PopularMovies/PopularMovies";

function App() {
  return (
    <Router>
      <div className="container" className="App">
        <div className="btn-group mt-5">
          <Link to="/" className="btn btn-dark">
            Home
          </Link>
          <Link to="/classicmovies" className="btn btn-dark">
            Classic Movies
          </Link>
          <Link to="/popularmovies" className="btn btn-dark">
            Popular Movies
          </Link>
        </div>
        <Switch>
          <Route path="/classicmovies">
            <ClasicMovies />
          </Route>
          <Route path="/popularmovies">
            <PopularMovies />
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
