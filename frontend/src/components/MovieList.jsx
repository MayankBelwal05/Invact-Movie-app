import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies, deleteMovie } from '../redux/actions/movieActions';
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';
import Navbar from './Navbar';
import { Modal, Button } from 'react-bootstrap';

const MovieList = () => {
  const dispatch = useDispatch();
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movieList = useSelector(state => state.movieList);
  const { movies, loading, error } = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleOpenAddMovie = () => setShowAddMovieModal(true);
  const handleCloseAddMovie = () => setShowAddMovieModal(false);

  return (
    <div className="container mt-4" style={{ borderRadius:'20px',backgroundColor: 'black', color: 'white' }}>
      <Navbar handleOpenAddMovie={handleOpenAddMovie} />
      <h1 style={{ textAlign: 'center', fontSize: '54px', fontFamily: 'Georgia, serif' }}>Movie Watchlist</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-4">
            {movies.map(movie => (
              <div key={movie._id} className="col mb-4">
                <MovieItem movie={movie} deleteMovie={deleteMovie} handleShowModal={handleShowModal} />
              </div>
            ))}
          </div>

          <Modal show={showModal} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie ? selectedMovie.title : ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedMovie && (
                <>
                  <p><strong>Description:</strong> {selectedMovie.description}</p>
                  <p><strong>Release Year:</strong> {selectedMovie.releaseYear}</p>
                  <p><strong>Genre:</strong> {selectedMovie.genre}</p>
                  <p><strong>Watched:</strong> {selectedMovie.watched ? 'Yes 👁️' : 'No ❌'}</p>
                  <p><strong>Rating:</strong> {selectedMovie.rating}</p>
                  <p><strong>Review:</strong> {selectedMovie.review}</p>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showAddMovieModal} onHide={handleCloseAddMovie} size="lg">
            <Modal.Header closeButton>
            <Modal.Title style={{ marginTop: '30px' }}>Add Movie</Modal.Title>

            </Modal.Header>
            <Modal.Body>
              <AddMovie />
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MovieList;
