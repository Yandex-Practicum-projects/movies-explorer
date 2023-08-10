const router = require('express').Router();
const { addMovie, deleteMovie, getMovies } = require('../controllers/movie');
const { validateAddMovie, validateMovieId } = require('../validations/movie');

router.get('/', getMovies);
router.post('/', validateAddMovie, addMovie);
router.delete('/:id', validateMovieId, deleteMovie);

module.exports = router;
