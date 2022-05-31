import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class AuthenticateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export { AuthenticateUserDTO };
