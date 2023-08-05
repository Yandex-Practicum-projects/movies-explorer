import { useState } from 'react';

export function useFormWithValidation(inputValues = {}, initialValid = false) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialValid);
  
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };
  return { values, handleChange, errors, isValid };
}