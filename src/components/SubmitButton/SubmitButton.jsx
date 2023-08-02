import './SubmitButton.css';
const SubmitButton = ({text, loading}) => {
  return (
    <button
      type='submit'
      className={`submit-button ${loading && 'submit-button_loading'}`}
      disabled={loading}
    >
      {text}
    </button>
  );
};

export default SubmitButton;