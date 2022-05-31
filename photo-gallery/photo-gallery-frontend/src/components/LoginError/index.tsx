import { InvalidError } from './styles';

interface ILoginErrorProps {
  invalidUser: boolean;
}

function LoginError({ invalidUser }: ILoginErrorProps) {
  return (
    <InvalidError invalidUser={invalidUser}>
      <span>Invalid email or password.</span>
    </InvalidError>
  );
}

export default LoginError;
