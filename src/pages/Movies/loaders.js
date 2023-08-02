import { getSavedFilms } from '../../utils/MainApi';
import { getFilms } from '../../utils/MoviesApi';

export async function moviesLoader() {
  const allMovies = await getFilms();
  return { allMovies };
}

export async function savedMoviesLoader() {
  const allMovies = await getSavedFilms();
  return { allMovies };
}