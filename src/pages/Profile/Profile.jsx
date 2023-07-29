import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import UserInfo from './components/UserInfo/UserInfo';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Profile.css';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange } = useForm({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

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
      <form className='profile' onSubmit={handleSubmit}>
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
            <button type='button' className='profile__logout'>Выйти из аккаунта</button>
          </>
        )}
      </form>
    </>
  );
};

export default Profile;