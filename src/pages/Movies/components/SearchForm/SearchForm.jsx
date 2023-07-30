import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section>
      <form className='search-form'>
        <div className='search-form__wrapper'>
          <label className='search-form__label'>
            <input className='search-form__input' type='search' placeholder='Фильм' required/>
            <button className='search-form__button' type='submit'>Поиск</button>
          </label>
          <CustomCheckbox />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;