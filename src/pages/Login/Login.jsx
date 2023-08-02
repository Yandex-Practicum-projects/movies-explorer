import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { signin } from '../../utils/MainApi';
import AuthForm from '../../components/AuthForm/AuthForm';

const Login = () => {
  const navigation = useNavigate();
  const { login } = useContext(AuthContext);
  const [status, setStatus] = useState('idle');
  const handleSubmit = (formData) => {
    setStatus('loading');
    signin(formData)
      .then((res) => {
        setStatus('success');
        login(res);
        navigation('/', { replace: true });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <AuthLayout
      title='Рады видеть!'
      footnote='Ещё не зарегистрированы?'
      link={{ path: '/signup', text: 'Регистрация' }}
    >
      <AuthForm status={status} button='Войти' handleSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default Login;