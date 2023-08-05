import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../utils/MainApi';
import { AuthContext } from '../../contexts/AuthContext';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import AuthForm from '../../components/AuthForm/AuthForm';

const Register = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useContext(AuthContext);
  const [status, setStatus] = useState('idle');
  const errorMessage = status === 409 ? 'Пользователь с таким email уже существует' :
    'При регистрации пользователя произошла ошибка';

  const handleSubmit = (formData) => {
    setStatus('loading');
    signup(formData)
      .then(() => {
        signin({ email: formData.email, password: formData.password })
          .then((res) => {
            setStatus('success');
            login(res);
            navigate('/movies', { replace: true });
          })
          .catch((error) => setStatus(error.status));
      })
      .catch((error) => setStatus(error.status));
  };

  useEffect(() => {
    if(currentUser) navigate('/', { replace: true });
  }, [currentUser, navigate]);

  return (
    <AuthLayout
      title='Добро пожаловать!'
      footnote='Уже зарегистрированы?'
      link={{ path: '/signin', text: 'Войти' }}
    >
      <AuthForm
        status={status}
        errorFromServer={typeof status === 'number' && errorMessage}
        name={true}
        button='Зарегистрироваться'
        handleSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default Register;