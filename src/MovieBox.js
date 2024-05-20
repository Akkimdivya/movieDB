import React from "react";
import { Link } from "react-router-dom";

const MovieBox = ({ id, title, poster_path }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div className="movie-box">
      <Link to={`/movie/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="movie-info">
          <h5>{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default MovieBox;
