import { ForbiddenException, Injectable } from '@nestjs/common';
import { prisma } from 'src/database/prismaClient';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthenticateUserDTO } from '../../dtos/AuthenticateUserDTO';

@Injectable()
export class AuthenticateUserService {
  constructor(private jwt: JwtService, private config: ConfigService) {}

  async execute({ email, password }: AuthenticateUserDTO) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Username or password invalid');
    }

    const passwordMatch = await argon.verify(user.password, password);

    if (!passwordMatch) {
      throw new ForbiddenException('Username or password invalid');
    }

    return this.createToken(user.id, password);
  }

  createToken(userId: number, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    return this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: secret,
    });
  }
}
