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
    <div>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>{movie.releaseYear}</p>
          <p>{movie.genre}</p>
          <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
          <Rating value={movie.rating} text={`${movie.rating} stars`} />
          <p>Review: {movie.review}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
