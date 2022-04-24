import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './modules/account/Account.Module';
import { DeleteImageModule } from './modules/deleteImage/DeleteImage.module';
import { UploadImageModule } from './modules/uploadImage/UploadImage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AccountModule,
    UploadImageModule,
    DeleteImageModule,
  ],
})
export class AppModule {}
