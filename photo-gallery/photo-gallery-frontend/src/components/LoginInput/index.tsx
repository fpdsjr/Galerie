import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { LoginSchema } from '../../utils/LoginSchema';
import { Container, JoinButton, ButtonContainer, ErrorMessage } from './styles';

interface IValues {
  email: string;
  password: string;
}

interface ILoginInputProps {
  handleSubmit: (values: IValues) => Promise<void>;
}

function LoginInput({ handleSubmit }: ILoginInputProps) {
  const navigate = useNavigate();

  const dontHaveAccount = "Don't have an account?";

  return (
    <Container>
      <Formik
        onSubmit={(values: IValues, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={LoginSchema}
        initialValues={{
          email: '',
          password: '',
        }}>
        {({ handleSubmit, errors, touched }) => (
          <>
            <h1>Login</h1>
            <p>Welcome Back</p>
            <Form>
              <div>
                <label htmlFor="email">
                  <span>Email</span>
                  <Field id="email" name="email" type="text" />
                  {errors.email && touched.email && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  )}
                </label>
              </div>
              <label htmlFor="password">
                <span>Password</span>
                <Field id="password" name="password" type="password" />
                {errors.password && touched.password && (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                )}
              </label>
              <ButtonContainer type="submit" onClick={() => handleSubmit()}>
                Login
              </ButtonContainer>
              <p>
                {dontHaveAccount}{' '}
                <JoinButton onClick={() => navigate('/signup')}>
                  Join
                </JoinButton>
              </p>
            </Form>
          </>
        )}
      </Formik>
    </Container>
  );
}

export default LoginInput;
