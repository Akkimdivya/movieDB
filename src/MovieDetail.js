import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=d7d630e0f32c6668d8c7a6fb3955a5b6&language=en-US`;
    fetch(MOVIE_DETAIL_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return (
    <div className="movie-detail">
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;
