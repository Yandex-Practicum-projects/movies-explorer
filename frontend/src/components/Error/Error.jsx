import './Error.css';
const Error = ({errorMessage, type}) => {
  return (
    <span className={`error error_${type}`}>{errorMessage}</span>
  );
};

export default Error;