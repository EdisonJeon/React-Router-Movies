import React from "react";
import MovieDetails from "./MovieDetails";

export default function MovieList(props) {
  console.log("MovieList component has fired!");
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
