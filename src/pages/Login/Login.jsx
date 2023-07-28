import AuthLayout from '../../components/AuthLayout/AuthLayout';
import AuthForm from '../../components/AuthForm/AuthForm';

const Login = () => {
  const handleSubmit = (formData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return (
    <AuthLayout
      title='Рады видеть!'
      footnote='Ещё не зарегистрированы?'
      link={{ path: '/signup', text: 'Регистрация' }}
    >
      <AuthForm button='Войти' handleSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default Login;