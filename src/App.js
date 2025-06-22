import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SearchBar from "./component/SearchBar";
import MovieCard from "./component/MovieCard";
import MovieDetails from "./component/MovieDetails";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (term) => {
    const API_KEY = "a27f4d48";
    const res = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    fetchMovies("The Matrix");
  }, []);

  return (
    <Router>
      <div className="body">
        <div className="title">
          <NavLink to="/" className="nounderline"><h2 className="text-center">Movie Search App</h2></NavLink>
        </div>
        <Routes>
          <Route
            path="/"
            element={(
              <div className="container">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  onSearch={() => fetchMovies(searchTerm)}
                />
                <div className="row">
                  {movies.map((movie) => (
                    <div className="col-md-3 mb-4" key={movie.imdbID}>
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
