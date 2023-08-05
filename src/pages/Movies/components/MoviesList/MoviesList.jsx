import { useEffect, useState } from 'react';
import { initialCountMovies, loadCountMovies, updateCount } from '../../../../utils/moviesCountSettings';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesList.css';


const MoviesList = ({ savedPage, movies, handleDeleteMovie }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    updateCount();
    setCount(initialCountMovies);
  }, [movies]);
  
  const showMore = () => {
    updateCount();
    setCount(count + loadCountMovies);
  };

  return (
    <section className='movies-list'>
      {movies.length > 0 ?(
        <ul className='movies-list__list'>
          {movies.slice(0, count).map(movie => (
            <MoviesCard
              key={movie.id || movie._id}
              savedPage={savedPage}
              movie={movie}
              movies={movies}
              handleDeleteMovie={handleDeleteMovie}
            />
          ))}
        </ul>
      ) : (
        <p className='movies-list__message'>По вашему запросу ничего не найдено</p>
      )}
      {movies.length > count && (
        <button
          type='button'
          className='movies-list__button'
          onClick={showMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesList;