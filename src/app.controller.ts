import { Controller, Get, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { example } from './interfaces/example';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getMessage')
  getMessage(@Query() query: example): string {

    return this.appService.getSomeMesage(query.name, query.nepe);
  }
  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }
}
