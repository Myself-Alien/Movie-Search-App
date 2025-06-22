import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=a27f4d48`);
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;
  return (
    <div className="container">
      <div className="row mt-2">
        <h2 className="pt-2 pb-2 details-title">{movie.Title}</h2>
        <div className="col-md-4">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400"}
            alt={movie.Title}
            className="img-fluid mb-3"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-8 mb-3 details-title">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
