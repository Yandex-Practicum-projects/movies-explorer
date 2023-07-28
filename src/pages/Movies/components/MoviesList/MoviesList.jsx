import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesList.css';
import { movie } from '../../../../utils/fakeData';

const MoviesList = ({ savedPage }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (savedPage) {
      setMovies([{ ...movie, saved: true }]);
    } else {
      setMovies([movie, movie, movie, { ...movie, saved: true }, movie, movie]);
    }
  }, [savedPage]);
  return (
    <div className='movies-list'>
      <ul className='movies-list__list'>
        {movies.map((movie, index) => (
          <MoviesCard
            key={index}
            savedPage={savedPage}
            name={movie.name}
            duration={movie.duration}
            image={movie.image}
            saved={movie.saved}
          />
        ))}
      </ul>
      {!savedPage && (
        <button type='button' className='movies-list__button'>Ещё</button>
      )}
    </div>
  );
};

export default MoviesList;