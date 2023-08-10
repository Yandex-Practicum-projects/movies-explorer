const { celebrate, Joi } = require('celebrate');
const { urlPattern } = require('../utils/constants');

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    id:
    Joi.string()
      .required()
      .alphanum()
      .hex()
      .length(24),
  }),
});

module.exports.validateAddMovie = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(urlPattern).message('Некорректная ссылка картинки'),
    trailerLink: Joi.string().required().pattern(urlPattern).message('Некорректная ссылка трейлера'),
    thumbnail: Joi.string().required().pattern(urlPattern).message('Некорректная ссылка картинки'),
    movieId: Joi.number().required(),
  }),
});
