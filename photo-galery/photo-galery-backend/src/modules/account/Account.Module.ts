import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUser.Controller';
import { AuthenticateUserService } from './useCases/authenticateUser/AuthenticateUser.Service';
import { CreateUserController } from './useCases/createUser/CreateUser.Controller';
import { CreateUserService } from './useCases/createUser/CreateUser.Service';
import { ListAllUserController } from './useCases/listAllUserImage/ListAllUserImage.Controller';
import { ListAllUserImageService } from './useCases/listAllUserImage/ListAllUserImage.Service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [
    CreateUserController,
    AuthenticateUserController,
    ListAllUserController,
  ],
  providers: [
    CreateUserService,
    AuthenticateUserService,
    JwtStrategy,
    ListAllUserImageService,
  ],
})
export class AccountModule {}
