import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className='footer__under'>
        <li className='footer__under-text'>© 2020</li>
        <li className='footer__under-text'>
          <a href='https://praktikum.yandex.ru/' className='footer__link' target='_blank' rel='noopener noreferrer'>
            Яндекс.Практикум
          </a>
        </li>
        <li className='footer__under-text'>
          <a href='https://github.com/Bababum95' className='footer__link' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;