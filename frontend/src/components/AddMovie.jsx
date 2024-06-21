
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addMovie } from '../redux/actions/movieActions';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMovie({ title, description, releaseYear, genre }));
    history.push('/');
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        
        <label>Release Year</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
        
        <label>Genre</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
