import React from 'react';
import { useField } from 'formik';


const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name} className="form-label">{label}</label>
      <input {...field} {...props} className="form-input" />
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInput;
