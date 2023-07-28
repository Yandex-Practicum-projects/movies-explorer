import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
const Header = ({children}) => {
  return (
    <header className='header'>
      <Link className='header__logo' to='/'>
        <img src={logo} alt='logo' />
      </Link>
      {children}
    </header>
  );
};

export default Header;