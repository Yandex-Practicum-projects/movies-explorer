import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <div className='search-form__wrapper'>
        <label className='search-form__label'>
          <input className='search-form__input' type='search' placeholder='Фильм' />
          <button className='search-form__button' type='submit'>Поиск</button>
        </label>
        <CustomCheckbox />
      </div>
    </form>
  );
};

export default SearchForm;