import React from "react";
import { useNavigate } from "react-router-dom";

const MovieDetails = (props) => {
  console.log("MovieDetails component has fired!");
  const { title, director, metascore, id } = props.movie;
  const navigate = useNavigate();
  const routeToMovie = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movie-card" onClick={() => routeToMovie()}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
};

export default MovieDetails;
