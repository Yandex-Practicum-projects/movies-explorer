import { useEffect, useState } from 'react';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import './SearchForm.css';

const SearchForm = ({ handleSubmit, status }) => {
  const [query, setQuery] = useState('');
  const [isError, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    query === '' ? setError(true) : handleSubmit(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setError(false);
  };

  useEffect(() => {
    const lastQuery = localStorage.getItem('query');
    if(lastQuery) handleSubmit(query);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <section>
      <form onSubmit={onSubmit} className='search-form' noValidate>
        <div className='search-form__wrapper'>
          <label className='search-form__label'>
            <input
              value={query}
              onChange={handleChange}
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
          <CustomCheckbox />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;