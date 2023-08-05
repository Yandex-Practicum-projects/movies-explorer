import './SubmitButton.css';
const SubmitButton = ({text, loading, isValid}) => {
  return (
    <button
      type='submit'
      className={`submit-button ${loading && 'submit-button_loading'} ${!isValid && 'submit-button_disabled'}`}
      disabled={loading || !isValid}
    >
      {text}
    </button>
  );
};

export default SubmitButton;