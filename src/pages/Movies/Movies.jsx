import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Beatfilm from '../../utils/Beatfilm';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';
import SearchForm from './components/SearchForm/SearchForm';


const Movies = ({ savedPage }) => {
  const { allMovies } = useLoaderData();
  const beatfilm = new Beatfilm({ allMovies });
  const [movies, setMovies] = useState([]);

  const handleSubmit = (query) => {
    if (!query) return;
    localStorage.setItem('query', query);
    setMovies(beatfilm.searchMovie(query));
  };

  useEffect(() => {
    if (savedPage) {
      setMovies(allMovies);
    } else {
      const lastQuery = localStorage.getItem('query');
      lastQuery && handleSubmit(lastQuery);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedPage]);


  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main style={{ flex: 1 }}>
        <SearchForm {...{ handleSubmit }} />
        <MoviesList {...{ savedPage, movies }} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;