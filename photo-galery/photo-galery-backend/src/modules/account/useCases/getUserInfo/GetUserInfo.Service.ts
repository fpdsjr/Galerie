import { Injectable } from '@nestjs/common';
import { prisma } from 'src/database/prismaClient';

@Injectable()
class GetUserInfoService {
  async execute(sub: number) {
    const getUserInfo = prisma.user.findUnique({
      where: {
        id: sub,
      },
      select: {
        firstName: true,
        lastName: true,
      },
    });

    return getUserInfo;
  }
}

export { GetUserInfoService };
