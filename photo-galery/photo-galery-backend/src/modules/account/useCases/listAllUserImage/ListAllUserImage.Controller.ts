import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ListAllUserImageService } from './ListAllUserImage.Service';

interface ISub {
  sub: number;
}

@Controller()
class ListAllUserController {
  constructor(private listAllUserImageService: ListAllUserImageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('listimages')
  async handle(@Req() req: Request) {
    const { sub } = req.user as ISub;

    const getAllUserPhoto = await this.listAllUserImageService.execute(sub);

    return getAllUserPhoto;
  }
}

export { ListAllUserController };
