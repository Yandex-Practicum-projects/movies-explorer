import { useState } from 'react';
import { signup } from '../../utils/MainApi';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import AuthForm from '../../components/AuthForm/AuthForm';

const Register = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (formData) => {
    setStatus('loading');
    signup(formData)
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  return (
    <AuthLayout
      title='Добро пожаловать!'
      footnote='Уже зарегистрированы?'
      link={{ path: '/signin', text: 'Войти' }}
    >
      <AuthForm status={status} name={true} button='Зарегистрироваться' handleSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default Register;