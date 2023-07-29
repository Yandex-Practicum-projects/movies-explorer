import mainImage from '../../../../images/main.png';
import './Promo.css';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__content'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб‑разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href='#about-project'>
            <button className='promo__button'>Узнать больше</button>
          </a>
        </div>
        <img className='promo__image' src={mainImage} alt='промо картинка'/>
      </div>
    </section>
  );
};

export default Promo;