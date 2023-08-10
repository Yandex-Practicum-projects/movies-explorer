const NotFound = require('../errors/not-found');
const NoAccess = require('../errors/no-access');
const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.addMovie = (req, res, next) => {
  const {
    nameRU,
    nameEN,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
  } = req.body;
  const owner = req.user._id;
  Movie.create({
    nameRU,
    nameEN,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
  })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail(new NotFound('Запрашиваемый фильм не найден'))
    .then((movie) => {
      if (movie.owner.equals(req.user._id)) {
        return Movie.deleteOne(movie)
          .then(() => res.send({ message: 'Фильм удален' }));
      }
      throw new NoAccess('Нелья удалять фильмы других пользователей');
    })
    .catch(next);
};
