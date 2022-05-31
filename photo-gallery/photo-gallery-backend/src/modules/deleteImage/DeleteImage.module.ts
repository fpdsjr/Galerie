import { Module } from '@nestjs/common';
import { StorageProvider } from 'src/shared/container/StorageProvider/StorageProvider.service';
import { DeleteImageController } from './useCases/DeleteImage.Controller';
import { DeleteImageService } from './useCases/DeleteImage.Service';

@Module({
  controllers: [DeleteImageController],
  providers: [DeleteImageService, StorageProvider],
})
export class DeleteImageModule {}
