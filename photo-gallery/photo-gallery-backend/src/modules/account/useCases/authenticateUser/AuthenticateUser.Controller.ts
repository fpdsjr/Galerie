import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthenticateUserDTO } from '../../dtos/AuthenticateUserDTO';
import { AuthenticateUserService } from './AuthenticateUser.Service';

@Controller('user')
export class AuthenticateUserController {
  constructor(private authenticateUserService: AuthenticateUserService) {}

  @Post('authenticate')
  async handle(@Body() { email, password }: AuthenticateUserDTO) {
    const token = await this.authenticateUserService.execute({
      email,
      password,
    });

    return {
      token,
    };
  }
}
