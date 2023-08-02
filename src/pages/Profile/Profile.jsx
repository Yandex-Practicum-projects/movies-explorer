import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { signout } from '../../utils/MainApi';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import UserInfo from './components/UserInfo/UserInfo';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Profile.css';

const Profile = () => {
  const navigation = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });

  const logout = () => {
    signout();
    localStorage.removeItem('query');
    navigation('/', { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <div className='profile__content'>
              <UserInfo label='Имя' value={currentUser.name}>
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
              <UserInfo label='E-mail' value={currentUser.email}>
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