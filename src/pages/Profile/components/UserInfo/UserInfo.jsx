import './UserInfo.css';

const UserInfo = ({ label, value, children }) => {
  return (
    <div className='user-info'>
      <p className='user-info__text'>{label}</p>
      {!!children? children : (<p className='user-info__text'>{value}</p>)}
    </div>
  );
};

export default UserInfo;