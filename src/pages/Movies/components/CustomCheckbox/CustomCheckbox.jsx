import './CustomCheckbox.css';
const CustomCheckbox = ({ setShorts, shorts }) => {

  return (
    <label className='custom-checkbox'>
      <div className='custom-checkbox__badge'>
        <input
          onChange={() => setShorts(!shorts)}
          checked={shorts}
          className='custom-checkbox__input'
          type='checkbox'
        />
        <span className='custom-checkbox__checkmark' />
      </div>
      <p className='custom-checkbox__text'>Короткометражки</p>
    </label>
  );
};

export default CustomCheckbox;