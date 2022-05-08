/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUpSchema } from '../../utils/SignUpSchema';
import { Container, JoinButton, ErrorMessage } from './styles';

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ISignUpInputProps {
  handleSubmit: (values: IValues) => void;
}

function SignUpInput({ handleSubmit }: ISignUpInputProps) {
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={(values: IValues, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
      validationSchema={SignUpSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}>
      {({ handleSubmit, errors, touched }) => (
        <Container>
          <h1>Join Galerie</h1>
          <div>
            <label htmlFor="firstName">
              <span>FirstName</span>
              <Field id="firstName" name="firstName" type="text" />
              {errors.firstName && touched.firstName && (
                <ErrorMessage>{errors.firstName}</ErrorMessage>
              )}
            </label>
            <label htmlFor="lastName">
              <span>LastName</span>
              <Field id="lastName" name="lastName" type="text" />
              {errors.lastName && touched.lastName && (
                <ErrorMessage>{errors.lastName}</ErrorMessage>
              )}
            </label>
          </div>
          <label htmlFor="email">
            <span>Email</span>
            <Field id="email" name="email" type="text" />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <Field id="password" name="password" type="password" />
            {errors.password && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </label>
          <JoinButton type="button" onClick={() => handleSubmit()}>
            Join
          </JoinButton>
          <p>
            Already have an account?{' '}
            <button type="button" onClick={() => navigate('/login')}>
              Login
            </button>
          </p>
        </Container>
      )}
    </Formik>
  );
}

export default SignUpInput;
