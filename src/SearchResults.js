import React from "react";
import MovieBox from "./MovieBox";

const SearchResults = ({ movies }) => {
  return (
    <div className="container">
      <div className="grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieBox key={movie.id} {...movie} />
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
