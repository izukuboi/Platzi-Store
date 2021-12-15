import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSomeMesage(): string {
    return 'lmao sos bien fresco brother tus mocasines son de bata';
  }
}
