import { Link } from 'react-router-dom';
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <>
      <Header>
        {currentUser ? (
          <Navigation />
        ) : (
          <nav className='header__nav'>
            <Link className='header__link' to='/signup'>Регистрация</Link>
            <Link className='header__login' to='/signin'>Войти</Link>
          </nav>
        )}
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default Main;