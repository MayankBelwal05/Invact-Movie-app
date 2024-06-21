// src/components/AddMovie.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [watched, setWatched] = useState(false);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title,
      description,
      releaseYear,
      genre,
      watched,
      rating,
      review,
    };
    dispatch(addMovie(movie));
    // Reset the form
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    setWatched(false);
    setRating('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Release Year:</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
          />
          Watched
        </label>
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Review:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
