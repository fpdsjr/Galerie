import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthProvider/useAuth';
import SignUpInput from '../SignUpInput';
import { Container, ImageContainer } from './styles';

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function SignUp() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit({
    firstName,
    lastName,
    email,
    password,
  }: IValues) {
    try {
      auth.createUser({ firstName, lastName, email, password });
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const userAlreadyLogged = auth.verifyUser();

    if (!userAlreadyLogged) {
      navigate('/signup');
    } else {
      navigate('/home');
    }
  }, []);

  return (
    <Container>
      <ImageContainer />
      <SignUpInput handleSubmit={handleSubmit} />
    </Container>
  );
}

export default SignUp;
