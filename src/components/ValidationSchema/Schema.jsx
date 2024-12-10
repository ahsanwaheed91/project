import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  username: Yup.string().required('UserName is required').min(4),
  password: Yup.string().min(6).required('Password must be at least 6 characters'),
});

export const signUpValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6).required('Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')])
    .required('Passwords must match'),
});
