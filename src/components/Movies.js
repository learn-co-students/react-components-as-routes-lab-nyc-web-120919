import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => 
          <div>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time}</p> 
            <p>Genres: {movie.genres}></p>
            <p> Score: {movie.metascore}</p>
          </div>)}
    </div>
  );
};

export default Movies;
