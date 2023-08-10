import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './AuthLayout.css';
const AuthLayout = ({ title, footnote, link, children }) => {
  return (
    <main className='auth'>
      <section className='auth__section'>
        <Link className='auth__logo' to='/'>
          <img src={logo} alt='логотип' />
        </Link>
        <h1 className='auth__title'>{title}</h1>
        {children}
        <p className='auth__footnote'>
          {footnote}
          <Link className='auth__link' to={link.path}>{link.text}</Link>
        </p>
      </section>
    </main>
  );
};

export default AuthLayout;