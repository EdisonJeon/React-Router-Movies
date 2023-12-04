import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";

export default function App() {
  console.log("App component fired!");
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);
 

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/movies") // Study this endpoint with Postman
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
    return () => {
      console.log(
        "successfully imported data on first render, simulating a clean up if necessary, good bye."
      );
    };
  }, []);

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <Routes>
        <Route
          path="/"
          element={
            <MovieList movies={movies} />
          }
        />
        <Route path="movies/:movieID/*" element={<Movie movies={movies} />} />
      </Routes>
    </div>
  );
}
