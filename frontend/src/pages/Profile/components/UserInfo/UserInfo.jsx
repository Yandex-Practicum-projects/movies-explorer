import Error from '../../../../components/Error/Error';
import './UserInfo.css';

const UserInfo = ({label, error, ...props}) => {
  return (
    <div className='user-info'>
      <p className='user-info__text'>{label}</p>
      <input
        {...props}
        className='user-info__input'
        required
        maxLength={30}
        minLength={2}
      />
      {error && (<Error type='input' errorMessage={error} />)}
    </div>
  );
};

export default UserInfo;