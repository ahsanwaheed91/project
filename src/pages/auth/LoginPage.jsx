import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import FormikInput from '../../components/FormikInput';
import { loginValidationSchema } from '../../components/ValidationSchema/Schema';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Use email instead of username for login
    const userExists = users.find(
      (user) => user.email === values.username && user.password === values.password
    );

    if (userExists) {
      login(userExists);
      navigate('/dashboard');
    } else {
      setErrors({ username: 'Invalid credentials', password: 'Invalid credentials' });
    }
    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormikInput label="Email" name="username" type="email" /> {/* Update to "Email" */}
            <FormikInput label="Password" name="password" type="password" />
            <div className="remember-me">
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className="form-links">
        <Link to="/signup" className="form-link">Don't have an account yet? Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
