import { ForbiddenException, Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { prisma } from 'src/database/prismaClient';
import { StorageProvider } from 'src/shared/container/StorageProvider/StorageProvider.service';
import { tmpFolder } from './UploadImage.Controller';
import { promises } from 'fs';
import { UrlShorted } from 'src/shared/container/URLshorted/UrlShorted.service';

@Injectable()
export class UploadImageService {
  constructor(
    private storageProvider: StorageProvider,
    private urlShorted: UrlShorted,
  ) {}

  async execute(file: Express.Multer.File, sub: number) {
    const { originalname, filename, size } = file;

    const path = resolve(tmpFolder, filename);
    const fileStream = createReadStream(path);

    // const verifyIfImageNameAlreadyExists = await prisma.photo.findFirst({
    //   where: {
    //     name: originalname,
    //     user_id: sub,
    //   },
    // });

    try {
      const upload = await this.storageProvider.upload(
        fileStream,
        filename,
        path,
      );

      const shortUrl = await this.urlShorted.execute(upload.Location);
      const { Location } = upload;

      const createPhoto = await prisma.photo.create({
        data: {
          name: originalname,
          size: String(size),
          key: filename,
          url: Location,
          short_url: shortUrl,
          user_id: sub,
        },
      });

      return createPhoto;
    } catch (err) {
      console.log(err.message);
    }
  }
}
