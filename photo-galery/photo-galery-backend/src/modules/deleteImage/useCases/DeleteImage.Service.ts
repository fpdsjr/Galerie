import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from 'src/database/prismaClient';
import { StorageProvider } from 'src/shared/container/StorageProvider/StorageProvider.service';

@Injectable()
export class DeleteImageService {
  constructor(private storageProvider: StorageProvider) {}

  async execute(key: string) {
    try {
      await prisma.photo.delete({
        where: {
          key,
        },
      });
    } catch (err) {
      throw new NotFoundException('No image to be deleted');
    }

    const deleteImageS3 = await this.storageProvider.delete(key);

    return deleteImageS3;
  }
}
