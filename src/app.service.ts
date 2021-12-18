import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSomeMesage(message: string, nepe: number): string {
    return `lmao sos bien fresco brother tus mocasines son de ${message} ${nepe}`;
  }
}
