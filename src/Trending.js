import React from "react";
import MovieBox from "./MovieBox";

const Trending = ({ movies }) => {
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

export default Trending;

