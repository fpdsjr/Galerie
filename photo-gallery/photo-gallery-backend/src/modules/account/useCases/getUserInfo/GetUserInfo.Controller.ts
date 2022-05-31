import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { GetUserInfoService } from './GetUserInfo.Service';

interface ISub {
  sub: number;
}
@Controller()
class GetUserInfoController {
  constructor(private getUserInfoService: GetUserInfoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('user/info')
  async handle(@Req() req: Request) {
    const { sub } = req.user as ISub;

    const getUserInfo = await this.getUserInfoService.execute(sub);

    return getUserInfo;
  }
}

export { GetUserInfoController };
