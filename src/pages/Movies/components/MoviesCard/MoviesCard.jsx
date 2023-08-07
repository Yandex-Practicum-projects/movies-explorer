import { useState } from 'react';
import { deleteFilm, saveFilm } from '../../../../utils/MainApi';
import { formatTime } from '../../../../utils/formatTime';
import './MoviesCard.css';

const MoviesCard = ({ movies, movie, savedPage, handleDeleteMovie }) => {
  const [isSaved, setSaved] = useState(movie.saved);
  const buttonClasses = `movies-card__button
  ${isSaved && 'movies-card__button_saved'}
  ${savedPage && 'movies-card__button_delete'}
  ${isSaved === 'loading' && 'movies-card__button_loading'}`;
  const addToFavorite = () => {
    setSaved('loading');
    saveFilm({
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.image,
      movieId: movie.id,
    })
      .then((res) => {
        movie._id = res._id;
        movie.saved = true;
        setSaved(true);
        localStorage.setItem('findedMovies', JSON.stringify(movies));
      })
      .catch(() => setSaved(false));
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (savedPage) {
      setSaved('loading');
      deleteFilm(movie._id)
        .then(() => {
          setSaved(false);
          movie.saved = false;
          handleDeleteMovie(movie.movieId);
        });
      return;
    }
    isSaved ? removeFromFavorite() : addToFavorite();
  };

  const removeFromFavorite = () => {
    if (!movie._id) return;
    setSaved('loading');
    deleteFilm(movie._id)
      .then(() => {
        setSaved(false);
        movie.saved = false;
        localStorage.setItem('findedMovies', JSON.stringify(movies));
      });
  };

  return (
    <li className='movies-card'>
      <a href={movie.trailerLink} target='_blank' rel='noopener noreferrer' className='movies-card__link' >
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>{movie.nameRU}</h2>
          <p className='movies-card__duration'>{formatTime(movie.duration)}</p>
        </div>
        <img
          className='movies-card__image'
          src={movie.image}
          alt={movie.nameRU}
        />
        <button
          type='button'
          className={buttonClasses}
          onClick={toggleFavorite}
          disabled={isSaved === 'loading'}
        >
          Сохранить
        </button>
      </a>
    </li>
  );
};

export default MoviesCard;