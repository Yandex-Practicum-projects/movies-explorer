import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className='not-found'>
      <section className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
      </section>
      <Link className='not-found__link' to='/' >Назад</Link>
    </main>
  );
};

export default NotFound;