import { useState } from 'react';

export const useForm = initState => {
  const [formValues, setFormValues] = useState(initState);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const reset = () => setFormValues(initState);

  return { ...formValues, formValues, handleInputChange, reset };
};
