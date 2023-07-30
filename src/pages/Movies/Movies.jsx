import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';
import SearchForm from './components/SearchForm/SearchForm';

const Movies = ({ savedPage }) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main style={{flex:1}}>
        <SearchForm />
        <MoviesList {...{ savedPage }} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;