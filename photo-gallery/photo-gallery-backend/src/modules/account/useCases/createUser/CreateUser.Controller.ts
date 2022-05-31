import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { CreateUserService } from './CreateUser.Service';

@Controller('user')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('create')
  handle(@Body() { email, password, firstName, lastName }: CreateUserDTO) {
    return this.createUserService.execute({
      email,
      password,
      firstName,
      lastName,
    });
  }
}
