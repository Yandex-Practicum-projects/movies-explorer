import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import SubmitButton from '../SubmitButton/SubmitButton';
import './AuthForm.css';
import Error from '../Error/Error';

const AuthForm = ({ button, handleSubmit, name, status, errorFromServer }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});
  const [showError, setShowError] = useState(null);

  const onChange = (event) => {
    if(showError) setShowError(null);
    handleChange(event);
  };

  useEffect(() => {
    setShowError(!!errorFromServer);
  }, [errorFromServer]);
  

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values);
  };

  return (
    <form className='form' onSubmit={onSubmit} noValidate>
      <div className='form__group'>
        {name && (
          <label className='form__label'>
            Имя
            <input
              className={`form__input ${errors.name && 'form__input_error'}`}
              placeholder='Имя'
              type='text'
              name='name'
              minLength={2}
              maxLength={30}
              required
              value={values.name || ''}
              onChange={onChange}
            />
            <Error type='input' errorMessage={errors.name} />
          </label>
        )}
        <label className='form__label'>
          E-mail
          <input
            className={`form__input ${errors.email && 'form__input_error'}`}
            placeholder='E-mail'
            type='email'
            name='email'
            required
            value={values.email || ''}
            onChange={onChange}
          />
          <Error type='input' errorMessage={errors.email} />
        </label>
        <label className='form__label'>
          Пароль
          <input
            className={`form__input ${errors.password && 'form__input_error'}`}
            placeholder='Пароль'
            type='password'
            name='password'
            minLength={2}
            maxLength={30}
            required
            value={values.password || ''}
            onChange={onChange}
          />
          <Error type='input' errorMessage={errors.password} />
        </label>
      </div>
      {showError && (<Error type='form' errorMessage={errorFromServer} />)}
      <SubmitButton isValid={isValid} loading={status === 'loading'} text={button} />
    </form>
  );
};

export default AuthForm;