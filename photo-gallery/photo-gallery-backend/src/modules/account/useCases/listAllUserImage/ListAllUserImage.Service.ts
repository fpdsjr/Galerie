import { Injectable } from '@nestjs/common';
import { prisma } from 'src/database/prismaClient';

@Injectable()
class ListAllUserImageService {
  async execute(sub: number) {
    const getAllImageImage = prisma.photo.findMany({
      where: {
        user_id: sub,
      },
    });

    return getAllImageImage;
  }
}

export { ListAllUserImageService };
