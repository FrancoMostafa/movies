import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="btn-group mt-5">
      <Link to="/" className="btn btn-dark">
        Home
      </Link>
      <Link to="/topmovies" className="btn btn-dark">
        Top Movies
      </Link>
      <Link to="/popularmovies" className="btn btn-dark">
        Popular Movies
      </Link>
    </div>
  );
}
