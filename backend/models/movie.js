const mongoose = require('mongoose');
const { urlPattern } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => urlPattern.test(url),
      message: 'Некорректная ссылка картинки',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => urlPattern.test(url),
      message: 'Некорректная ссылка трейлера',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => urlPattern.test(url),
      message: 'Некорректная ссылка картинки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
