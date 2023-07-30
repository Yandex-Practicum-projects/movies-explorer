import { Link } from 'react-router-dom';
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <>
      <Header>
        <nav className='header__nav'>
          <Link className='header__link' to='/signup'>Регистрация</Link>
          <Link className='header__login' to='/signin'>Войти</Link>
        </nav>
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