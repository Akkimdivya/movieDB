import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieBox from "./MovieBox";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
import MovieDetail from "./MovieDetail";
import SearchResults from "./SearchResults";
import NavbarComponent from "./NavbarComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "d7d630e0f32c6668d8c7a6fb3955a5b6";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
    fetchTrendingMovies();
  }, []);

  const fetchPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const fetchTrendingMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setTrendingMovies(data.results);
      });
  };

  return (
    <Router>
      <NavbarComponent setSearchResults={setSearchResults} />

      <Routes>
        <Route path="/" element={
          <div className="container">
            <div className="grid">
              {movies.map((movie) => (
                <MovieBox key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        } />
        <Route path="/top-rated" element={<Trending movies={trendingMovies} />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchResults movies={searchResults} />} />
      </Routes>
    </Router>
  );
};

export default App;
