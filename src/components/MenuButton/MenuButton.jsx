import './MenuButton.css';
const MenuButton = ({handleClick}) => {
  return (
    <button className='menu-button' onClick={handleClick} type='button'>
      <span className='menu-button__icon' />
    </button>
  );
};

export default MenuButton;