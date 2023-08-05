import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { signin } from '../../utils/MainApi';
import AuthForm from '../../components/AuthForm/AuthForm';

const Login = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useContext(AuthContext);
  const [status, setStatus] = useState('idle');
  const errorMessage = status === 401 ? 'Вы ввели неправильный логин или пароль' :
    'При авторизации произошла ошибка';

  const handleSubmit = (formData) => {
    setStatus('loading');
    signin(formData)
      .then((res) => {
        setStatus('success');
        login(res);
        navigate('/movies', { replace: true });
      })
      .catch((error) => setStatus(error.status));
  };

  useEffect(() => {
    if(currentUser) navigate('/', { replace: true });
  }, [currentUser, navigate]);

  return (
    <AuthLayout
      title='Рады видеть!'
      footnote='Ещё не зарегистрированы?'
      link={{ path: '/signup', text: 'Регистрация' }}
    >
      <AuthForm
        status={status}
        button='Войти'
        handleSubmit={handleSubmit}
        errorFromServer={typeof status === 'number' && errorMessage}
      />
    </AuthLayout>
  );
};

export default Login;