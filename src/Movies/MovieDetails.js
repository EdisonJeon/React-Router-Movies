import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieDetails = (props) => {
  console.log("MovieDetails component has fired!");
  const { movie } = props;
  const navigate = useNavigate();
  const routeToMovie = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={() => routeToMovie()}>
      <MovieCard movie={movie} />
    </div>
  );
};

export default MovieDetails;
