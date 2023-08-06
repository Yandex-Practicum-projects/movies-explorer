import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { signout, updateUser } from '../../utils/MainApi';
import { AuthContext } from '../../contexts/AuthContext';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import UserInfo from './components/UserInfo/UserInfo';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Error from '../../components/Error/Error';
import './Profile.css';

const Profile = () => {
  const navigation = useNavigate();
  const { currentUser, login } = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  }, true);

  const logout = () => {
    signout();
    login(null);
    localStorage.removeItem('lastRequest');
    navigation('/', { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    updateUser(values)
      .then((res) => {
        login(res);
        setIsEdit(false);
      })
      .catch((error) => {
        const errorMessage = error.status === 409 ? 'Пользователь с таким email уже существует' :
          'При обновлении профиля произошла ошибка';
        setServerError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className='profile'>
        <section className='profile__section'>
          <form className='profile__form' onSubmit={handleSubmit}>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <div className='profile__content'>
              <UserInfo
                label='Имя'
                value={values.name}
                type='text'
                name='name'
                onChange={handleChange}
                placeholder='Имя'
                disabled={!isEdit}
                error={errors.name}
              />
              <UserInfo
                label='E-mail'
                type='email'
                name='email'
                onChange={handleChange}
                placeholder='E-mail'
                value={values.email}
                disabled={!isEdit}
                error={errors.email}
              />
            </div>
            {isEdit ? (
              <>
                {serverError && <Error type='form' errorMessage={serverError} />}
                <SubmitButton isValid={isValid} loading={isLoading} text='Сохранить' />
              </>
            ) : (
              <>
                <button
                  type='button'
                  className='profile__edit'
                  onClick={() => setIsEdit(true)}
                >
                  Редактировать
                </button>
                <button type='button' className='profile__logout' onClick={logout}>Выйти из аккаунта</button>
              </>
            )}
          </form>
        </section>
      </main >
    </>
  );
};

export default Profile;