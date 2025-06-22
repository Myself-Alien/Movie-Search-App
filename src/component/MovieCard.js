import { Link } from "react-router-dom";
import '../App.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100 mt-3">
      <Link to={`/movie/${movie.imdbID}`} className="nounderline">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400?text=No+Image"}
          alt={movie.Title}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
