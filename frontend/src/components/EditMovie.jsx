import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateMovie, listMovies } from '../redux/actions/movieActions';

const EditMovie = () => {
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  const movieList = useSelector(state => state.movieList);
  const { movies } = movieList;

  const movie = movies.find(movie => movie._id === id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    if (!movie) {
      dispatch(listMovies());
    } else {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [dispatch, movie]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateMovie(id, { title, description, releaseYear, genre }));
    history.push('/');
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        
        <label>Release Year</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
        
        <label>Genre</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
