import { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export function useFormWithValidation(inputValues = {}, initialValid = false) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialValid);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'email') {
      if (!isEmail(value)) {
        target.setCustomValidity('Некорректый E-mail');
      } else {
        target.setCustomValidity('');
      }
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };
  return { values, handleChange, errors, isValid };
}
