import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteImageService } from './DeleteImage.Service';

@Controller('delete')
export class DeleteImageController {
  constructor(private deleteImageService: DeleteImageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async handle(@Body() { name }) {
    const deleteImage = await this.deleteImageService.execute(name);

    return deleteImage;
  }
}
