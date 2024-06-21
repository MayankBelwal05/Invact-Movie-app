import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies, deleteMovie } from '../redux/actions/movieActions';
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useDispatch();

  const movieList = useSelector(state => state.movieList);
  const { movies, loading, error } = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Movie Watchlist</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="movie-list">
          {movies.map(movie => (
            <MovieItem key={movie._id} movie={movie} deleteMovie={deleteMovie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
