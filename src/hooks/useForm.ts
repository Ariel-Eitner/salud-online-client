import { useState } from "react";

export const useForm = (initialValues: any) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};
