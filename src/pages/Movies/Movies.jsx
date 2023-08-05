import { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';
import SearchForm from './components/SearchForm/SearchForm';

const Movies = ({ savedPage }) => {
  const inputRef = useRef();
  const { beatfilm } = useLoaderData();
  const [shorts, setShorts] = useState(false);
  const [movies, setMovies] = useState(null);

  const handleSubmit = (query) => {
    if (savedPage && !query) shorts ? setMovies(beatfilm.shortsMovies) : setMovies(beatfilm.movies);
    if (!query) return;
    const findedMovies = beatfilm.searchMovie(query, shorts);
    if (!savedPage && findedMovies.length > 0) {
      localStorage.setItem('lastRequest', JSON.stringify({ query, shorts, findedMovies }));
    }
    setMovies(findedMovies);
  };

  useEffect(() => {
    if (savedPage) {
      setMovies(beatfilm.movies);
    } else {
      const lastRequest = localStorage.getItem('lastRequest');
      if (lastRequest) {
        const { query, shorts, findedMovies } = JSON.parse(lastRequest);
        setShorts(shorts);
        setMovies(findedMovies);
        inputRef.current.value = query;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedPage]);

  useEffect(() => {
    if(!movies) return;
    handleSubmit(inputRef.current.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shorts]);

  const handleDeleteMovie = (id) => {
    beatfilm.removeFilm(id);
    setMovies(beatfilm.movies);
  };

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main style={{ flex: 1 }}>
        <SearchForm {...{ handleSubmit, setShorts, shorts, inputRef }} />
        {movies && ( <MoviesList {...{ savedPage, movies, handleDeleteMovie }} /> )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;