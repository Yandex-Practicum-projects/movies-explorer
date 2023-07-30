import SubmitButton from '../SubmitButton/SubmitButton';
import './AuthForm.css';

const AuthForm = ({ button, handleSubmit, name }) => {

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit('test');
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form__group'>
        {name && (
          <label className='form__label'>
            Имя
            <input
              className='form__input form__input_error'
              type='text'
              name='name'
              minLength={2}
              maxLength={30}
              required
              placeholder='Имя'
            />
            <span className='form__error'>Что-то пошло не так...</span>
          </label>
        )}
        <label className='form__label'>
          E-mail
          <input className='form__input' type='email' name='email' required placeholder='E-mail' />
        </label>
        <label className='form__label'>
          Пароль
          <input
            className='form__input'
            type='password'
            name='password'
            required
            minLength={2}
            maxLength={30}
            placeholder='Пароль'
          />
        </label>
      </div>
      <SubmitButton text={button} />
    </form>
  );
};

export default AuthForm;