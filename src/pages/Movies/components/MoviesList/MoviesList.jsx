import { useEffect, useState } from 'react';
import { initialCountMovies, loadCountMovies, updateCount } from '../../../../utils/moviesCountSettings';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesList.css';


const MoviesList = ({ savedPage, movies }) => {
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
      {movies.length > 0 && (
        <ul className='movies-list__list'>
          {movies.slice(0, count).map(movie => (
            <MoviesCard
              key={movie.id}
              savedPage={savedPage}
              name={movie.nameRU}
              duration={movie.duration}
              image={movie.image.url}
              saved={movie.saved}
            />
          ))}
        </ul>
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