import './CustomCheckbox.css';
const CustomCheckbox = () => {
  return (
    <label className='custom-checkbox'>
      <div className='custom-checkbox__badge'>
        <input type='checkbox' className='custom-checkbox__input' />
        <span className='custom-checkbox__checkmark' />
      </div>
      <p className='custom-checkbox__text'>Короткометражки</p>
    </label>
  );
};

export default CustomCheckbox;