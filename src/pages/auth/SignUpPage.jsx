import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormikInput from '../../components/FormikInput';
import { signUpValidationSchema } from '../../components/ValidationSchema/Schema';
import { postData } from '../../services/AxiosFile';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Check if the user already exists in localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.some((user) => user.email === values.email);

      if (userExists) {
        alert('Email is already registered. Please log in.');
        setSubmitting(false);
        return;
      }

      // Save new user to localStorage
      const newUser = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Optional: Log the data to backend (if required later)
      // await postData('https://your-backend-api-endpoint', newUser);

      alert('Signup successful! Redirecting to login...');
      navigate('/login');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikInput label="Name" name="name" type="text" />
            <FormikInput label="Email" name="email" type="email" />
            <FormikInput label="Password" name="password" type="password" />
            <FormikInput label="Confirm Password" name="confirmPassword" type="password" />
            <button type="submit" className="form-button" disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
