import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { StorageProvider } from 'src/shared/container/StorageProvider/StorageProvider.service';
import { UrlShorted } from 'src/shared/container/URLshorted/UrlShorted.service';
import { UploadImageController } from './useCases/UploadImage.Controller';
import { UploadImageService } from './useCases/UploadImage.Service';

@Module({
  imports: [
    MulterModule.register({
      dest: './tmp/image',
    }),
  ],
  controllers: [UploadImageController],
  providers: [UploadImageService, StorageProvider, UrlShorted],
})
export class UploadImageModule {}
