import { useState } from 'react';
import { FormSchema, FormField } from '@/interfaces';

export function useDynamicForm(schema: FormSchema, onSubmit: (values: Record<string, any>) => void) {
  const initialValues: Record<string, any> = {};
  const initialErrors: Record<string, string | null> = {};

  schema.forEach(field => {
    initialValues[field.name] = field.defaultValue ?? '';
    initialErrors[field.name] = null;
  });

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validateField = (field: FormField, value: string): string | null => {
    if (field.required && !value) return 'Este campo es obligatorio';
    if (value && field.validations?.length) {
      const failed = field.validations.find(({ regex }) => !regex.test(value));
      return failed ? failed.message : null;
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string | null> = {};

    schema.forEach(field => {
      const value = values[field.name];
      const error = validateField(field, value);
      newErrors[field.name] = error;
    });

    setErrors(newErrors);
    setSubmitted(true);

    const hasErrors = Object.values(newErrors).some(err => err !== null);
    if (!hasErrors) onSubmit(values);
  };

  return {
    values,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  };
}
