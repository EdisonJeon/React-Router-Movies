import React from "react";

export default function MovieCard(props) {
  console.log('MovieCard component has fired!');
  const { title, director, metascore } = props.movie;
  return (
    <div>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </div>
  );
}
