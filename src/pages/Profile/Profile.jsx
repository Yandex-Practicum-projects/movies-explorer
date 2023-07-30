import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import UserInfo from './components/UserInfo/UserInfo';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Profile.css';

const Profile = () => {
  const navigation = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange } = useForm({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  const logout = () => {
    navigation('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(values);
    setIsEdit(false);
  };

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className='profile'>
        <section className='profile__section'>
          <form className='profile__form' onSubmit={handleSubmit}>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <div className='profile__content'>
              <UserInfo label='Имя' value={values.name || ''}>
                {isEdit && (
                  <input
                    type='text'
                    className='profile__input user-info__input'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    required
                    maxLength={30}
                    minLength={2}
                    placeholder='Имя'
                  />
                )}
              </UserInfo>
              <UserInfo label='E-mail' value={values.email || ''}>
                {isEdit && (
                  <input
                    type='email'
                    className='profile__input user-info__input'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    required
                    placeholder='E-mail'
                  />
                )}
              </UserInfo>
            </div>
            {isEdit ? (
              <SubmitButton text='Сохранить' />
            ) : (
              <>
                <button
                  type='button'
                  className='profile__edit'
                  onClick={() => setIsEdit(true)}
                >
                  Редактировать
                </button>
                <button type='button' className='profile__logout' onClick={logout} >Выйти из аккаунта</button>
              </>
            )}
          </form>
        </section>
      </main >
    </>
  );
};

export default Profile;