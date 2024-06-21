const express = require('express');
const {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');

const router = express.Router();

router.route('/').get(getMovies).post(addMovie);
router.route('/:id').put(updateMovie).delete(deleteMovie);

module.exports = router;
