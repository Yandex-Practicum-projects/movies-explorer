import Heading from '../Heading/Heading';
import Portfolio from '../Portfolio/Portfolio';
import studentPhoto from '../../../../images/student.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <Heading text='Студент' />
      <div className='about-me__container'>
        <div className='about-me__content'>
          <div>
            <h3 className='about-me__name'>Виталий</h3>
            <p className='about-me__major'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a
            className='about-me__github'
            href='https://github.com/Bababum95'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
        <img className='about-me__photo' src={studentPhoto} alt='Виталий фото' />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;