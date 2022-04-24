import { prisma } from 'src/database/prismaClient';

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
