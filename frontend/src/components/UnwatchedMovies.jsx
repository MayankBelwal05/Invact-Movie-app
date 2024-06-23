import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const UnwatchedMovies = () => {
  const movieList = useSelector(state => state.movieList);
  const { movies, loading, error } = movieList;

  const unwatchedMovies = movies.filter(movie => !movie.watched);

  return (
    <div className="container mt-4" style={{ color: 'black' }}>
      <h1 style={{ textAlign: 'center', fontSize: '42px', fontFamily: 'Georgia, serif' }}>Unwatched Movies</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="row row-cols-1 row-cols-md-4">
          {unwatchedMovies.map(movie => (
            <div key={movie._id} className="col mb-4">
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UnwatchedMovies;
