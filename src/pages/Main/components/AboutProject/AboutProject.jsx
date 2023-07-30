import Heading from '../Heading/Heading';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project' id='about-project'>
      <Heading text='О проекте' />
      <div className='about-project__container'>
        <div className='about-project__content'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__content'>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__progress-bar progress-bar'>
        <div className='progress-bar__backend'>
          <span className='progress-bar__time'>1 неделя</span>
          <span className='progress-bar__text'>Back-end</span>
        </div>
        <div className='progress-bar__frontend'>
          <span className='progress-bar__time'>4 недели</span>
          <span className='progress-bar__text'>Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;