import ProjectLink from '../ProjectLink/ProjectLink';
import './Portfolio.css';
const Portfolio = () => {
  return (
    <>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ProjectLink path='' text='Статичный сайт' />
      <ProjectLink path='' text='Адаптивный сайт' />
      <ProjectLink path='' text='Одностраничное приложение' />
    </>
  );
};

export default Portfolio;