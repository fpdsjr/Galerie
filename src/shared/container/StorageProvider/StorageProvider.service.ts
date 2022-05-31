import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { Stream } from 'stream';
import { getType } from 'mime';
import { promises } from 'fs';

@Injectable()
export class StorageProvider {
  constructor(private config: ConfigService) {}

  private s3 = new S3({
    region: this.config.get('AWS_REGION'),
    accessKeyId: this.config.get('AWS_ACESS_KEY_ID'),
    secretAccessKey: this.config.get('AWS_SECRET_ACCESS_KEY'),
  });

  async upload(imageBuffer: Stream, filename: string, path: string) {
    const ContentType = getType(path);
    try {
      const params = {
        Bucket: this.config.get('AWS_BUCKET'),
        Body: imageBuffer,
        Key: filename,
        ContentType,
      };

      const s3upload = await this.s3.upload(params).promise();
      promises.unlink(path);
      return s3upload;
    } catch (err) {
      throw new Error(`S3 upload error: ${err.message}`);
    }
  }

  async delete(key: string) {
    try {
      const deleteImage = await this.s3
        .deleteObject({
          Bucket: this.config.get('AWS_BUCKET'),
          Key: key,
        })
        .promise();

      return deleteImage;
    } catch (err) {
      throw new Error(`S3 delete error: ${err.message}`);
    }
  }
}
