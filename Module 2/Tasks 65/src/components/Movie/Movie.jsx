import React from 'react';
import './Movie.css';

const Movie = ({ title, poster, overview }) => (
  <div className="movie">
    <h3>{title}</h3>
    <img src={poster} alt={title} />
    <p>{overview}</p>
  </div>
);

export default Movie;
