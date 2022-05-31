import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { resolve } from 'path';
import { editFileName, imageFileFilter } from './config/multer';
import { UploadImageService } from './UploadImage.Service';

interface ISub {
  sub: number;
}

const tmpFolder = resolve(__dirname, '..', '..', '..', '..', 'tmp', 'image');

@Controller('upload')
export class UploadImageController {
  constructor(private uploadImageService: UploadImageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: tmpFolder,
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async handle(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    const { sub } = req.user as ISub;
    const image = await this.uploadImageService.execute(file, sub);

    return image;
  }
}

export { tmpFolder };
