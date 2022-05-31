import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from 'src/database/prismaClient';
import { StorageProvider } from 'src/shared/container/StorageProvider/StorageProvider.service';

@Injectable()
export class DeleteImageService {
  constructor(private storageProvider: StorageProvider) {}

  async execute(name: string) {
    const Image = await prisma.photo.findFirst({
      where: {
        name,
      },
    });

    try {
      await prisma.photo.delete({
        where: {
          name,
        },
      });
    } catch (err) {
      throw new NotFoundException('No image to be deleted');
    }

    const deleteImageS3 = await this.storageProvider.delete(Image.key);

    return deleteImageS3;
  }
}
