import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getMessage')
  getHello(): string {
    return this.appService.getSomeMesage();
  }
  @Get('getHello')
  getAnotherMessageNagger(): string {
    return this.appService.getHello();
  }

}
