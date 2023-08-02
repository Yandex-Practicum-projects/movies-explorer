import { useForm } from '../../hooks/useForm';
import SubmitButton from '../SubmitButton/SubmitButton';
import './AuthForm.css';

const AuthForm = ({ button, handleSubmit, name, status }) => {
  const {values, handleChange} = useForm({});

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form__group'>
        {name && (
          <label className='form__label'>
            Имя
            <input
              className='form__input'
              placeholder='Имя'
              type='text'
              name='name'
              minLength={2}
              maxLength={30}
              required
              value={values.name || ''}
              onChange={handleChange}
            />
            {/* <span className='form__error'>Что-то пошло не так...</span> */}
          </label>
        )}
        <label className='form__label'>
          E-mail
          <input
            className='form__input'
            placeholder='E-mail'
            type='email'
            name='email'
            required
            value={values.email || ''}
            onChange={handleChange}
          />
        </label>
        <label className='form__label'>
          Пароль
          <input
            className='form__input'
            placeholder='Пароль'
            type='password'
            name='password'
            minLength={2}
            maxLength={30}
            required
            value={values.password || ''}
            onChange={handleChange}
          />
        </label>
      </div>
      <SubmitButton loading={status === 'loading'} text={button} />
    </form>
  );
};

export default AuthForm;