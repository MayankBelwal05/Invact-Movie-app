import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const MovieItem = ({ movie, deleteMovie }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteMovie(movie._id));
    }
  };

  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
      <p>Rating: {movie.rating}</p>
      <p>Review: {movie.review}</p>
      <Link to={`/edit/${movie._id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/movie/${movie._id}`}>Details</Link>
    </div>
  );
};

export default MovieItem;
