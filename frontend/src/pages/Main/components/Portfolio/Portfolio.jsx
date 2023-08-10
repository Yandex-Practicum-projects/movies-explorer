import ProjectLink from '../ProjectLink/ProjectLink';
import './Portfolio.css';
const Portfolio = () => {
  return (
    <>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <ProjectLink path='https://github.com/Bababum95/how-to-learn' text='Статичный сайт' />
        <ProjectLink path='https://github.com/Bababum95/russian-travel' text='Адаптивный сайт' />
        <ProjectLink path='https://github.com/Bababum95/react-mesto-auth' text='Одностраничное приложение' />
      </ul>
    </>
  );
};

export default Portfolio;