import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul className="list-group">
      {movies.map((movie) => (
        <li key={movie.imdbID} className="list-group-item">
          {movie.Title} ({movie.Year})
        </li>
      ))}
    </ul>
  );
};

export default MovieList;