import Beatfilm from '../../utils/Beatfilm';
import { getSavedFilms } from '../../utils/MainApi';
import { getFilms } from '../../utils/MoviesApi';

export async function moviesLoader() {
  try {
    const allMovies = await getFilms();
    const savedMovies = await getSavedFilms();
    allMovies.forEach((movie, index) => {
      const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
      if (savedMovie) {
        savedMovie.saved = true;
        savedMovie.id = savedMovie.movieId;
        allMovies[index] = savedMovie;
      } else {
        movie.image = process.env.REACT_APP_BEATFILM_URL + movie.image.url;
      } 
    });
    const beatfilm = new Beatfilm({ allMovies });
    return { beatfilm };
  } catch {
    const beatfilm = new Beatfilm({allMovies: []});
    return { beatfilm };
  }
}

export async function savedMoviesLoader() {
  try {
    const allMovies = await getSavedFilms();
    const beatfilm = new Beatfilm({ allMovies });
    return { beatfilm };
  } catch {
    const beatfilm = new Beatfilm({allMovies: []});
    return { beatfilm };
  }
}
