import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from './Rating';

const MovieDetails = () => {
  const { id } = useParams();

  const movieList = useSelector(state => state.movieList);
  const { movies } = movieList;

  const movie = movies.find(movie => movie._id === id);

  return (
    <div className="container mt-4">
      {movie ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <h5 className="card-text"><strong>Description:</strong> {movie.description}</h5>
            <h5 className="card-text"><strong>Release Year:</strong> {movie.releaseYear}</h5>
            <h5 className="card-text"><strong>Genre:</strong> {movie.genre}</h5>
            <h5 className="card-text"><strong>Watched:</strong> {movie.watched ? 'Yes' : 'No'}</h5>
            <h5 className="card-text"><strong>Rating:</strong>{movie.rating} </h5>
            
            <h5 className="card-text"><strong>Review:</strong> {movie.review}</h5>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
