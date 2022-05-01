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
  @Get('list/images')
  async handle(@Req() req: Request) {
    const { sub } = req.user as ISub;

    const getAllUserPhoto = await this.listAllUserImageService.execute(sub);

    return getAllUserPhoto;
  }
}

export { ListAllUserController };
