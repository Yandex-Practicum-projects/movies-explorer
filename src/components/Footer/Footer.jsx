import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__under'>
        <p className='footer__under-text'>© 2020</p>
        <a href='https://praktikum.yandex.ru/' className='footer__under-text'>Яндекс.Практикум</a>
        <a href='https://github.com/Bababum95' className='footer__under-text'>Github</a>
      </div>
    </footer>
  );
};

export default Footer;