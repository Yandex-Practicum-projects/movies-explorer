import { useState } from 'react';
import { formatTime } from '../../../../utils/formatTime';
import './MoviesCard.css';
const baseUrl = process.env.REACT_APP_BEATFILM_URL;

const MoviesCard = ({ name, duration, image, saved, savedPage }) => {
  const [savedMovie, setSavedMovie] = useState(saved);
  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{name}</h2>
        <p className='movies-card__duration'>{formatTime(duration)}</p>
      </div>
      <img
        className='movies-card__image'
        src={`${baseUrl}/${image}`}
        alt={name}
      />
      {savedPage? (
        <button
          type='button'
          className='movies-card__button movies-card__button_delete'/>
      ):(
        <button
          type='button'
          className={`movies-card__button ${savedMovie && 'movies-card__button_saved'}`}
          onClick={() => setSavedMovie(!savedMovie)}
        >
          Сохранить
        </button>
      )}
    </li>
  );
};

export default MoviesCard;