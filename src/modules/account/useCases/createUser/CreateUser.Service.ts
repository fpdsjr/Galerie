import { ForbiddenException, Injectable } from '@nestjs/common';
import { prisma } from 'src/database/prismaClient';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import * as argon from 'argon2';

@Injectable()
export class CreateUserService {
  async execute({ email, password, firstName, lastName }: CreateUserDTO) {
    try {
      const hash = await argon.hash(password);

      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hash,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already registered');
        }
      }
      throw error;
    }
  }
}
