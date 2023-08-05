import { useState } from 'react';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import './SearchForm.css';

const SearchForm = ({ handleSubmit, status, setShorts, shorts, inputRef }) => {
  const [isError, setError] = useState(false);

  const onSubmit = (e) => {
    const query = inputRef.current.value;
    e.preventDefault();
    query === '' ? setError(true) : handleSubmit(query);
  };

  return (
    <section>
      <form onSubmit={onSubmit} className='search-form' noValidate>
        <div className='search-form__wrapper'>
          <label className='search-form__label'>
            <input
              ref={inputRef}
              onChange={() => setError(false)}
              className='search-form__input'
              type='search'
              placeholder='Фильм'
              required
            />
            <button
              className={`search-form__button ${isError && 'search-form__button_disabled'}`}
              type='submit'
              disabled={isError || status === 'loading'}
            >
              Поиск
            </button>
            {isError && (<span className='search-form__error'>Нужно ввести ключевое слово</span>)}
          </label>
          <CustomCheckbox {...{ setShorts, shorts }} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;