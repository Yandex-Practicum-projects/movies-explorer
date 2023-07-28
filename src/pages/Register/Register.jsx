import AuthLayout from '../../components/AuthLayout/AuthLayout';
import AuthForm from '../../components/AuthForm/AuthForm';

const Register = () => {
  const handleSubmit = (formData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return (
    <AuthLayout
      title='Добро пожаловать!'
      footnote='Уже зарегистрированы?'
      link={{ path: '/signin', text: 'Войти' }}
    >
      <AuthForm name={true} button='Зарегистрироваться' handleSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default Register;