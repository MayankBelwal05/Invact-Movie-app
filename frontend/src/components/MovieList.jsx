import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies, deleteMovie } from '../redux/actions/movieActions';
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';

const MovieList = () => {
  const dispatch = useDispatch();

  const movieList = useSelector(state => state.movieList);
  const { movies, loading, error } = movieList;

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Movie Watchlist</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Movie'}
      </button>
      {showForm && <AddMovie />}
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
