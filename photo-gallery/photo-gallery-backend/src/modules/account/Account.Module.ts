import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUser.Controller';
import { AuthenticateUserService } from './useCases/authenticateUser/AuthenticateUser.Service';
import { CreateUserController } from './useCases/createUser/CreateUser.Controller';
import { CreateUserService } from './useCases/createUser/CreateUser.Service';
import { GetUserInfoController } from './useCases/getUserInfo/GetUserInfo.Controller';
import { GetUserInfoService } from './useCases/getUserInfo/GetUserInfo.Service';
import { ListAllUserController } from './useCases/listAllUserImage/ListAllUserImage.Controller';
import { ListAllUserImageService } from './useCases/listAllUserImage/ListAllUserImage.Service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [
    CreateUserController,
    AuthenticateUserController,
    ListAllUserController,
    GetUserInfoController,
  ],
  providers: [
    CreateUserService,
    AuthenticateUserService,
    JwtStrategy,
    ListAllUserImageService,
    GetUserInfoService,
  ],
})
export class AccountModule {}
