import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";

const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=d7d630e0f32c6668d8c7a6fb3955a5b6&language=en-US&page=1`;

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(UPCOMING_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {movies.map((movie) => (
          <MovieBox key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
