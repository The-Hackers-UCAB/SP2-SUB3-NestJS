import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Prueba Heroku, Docker, Github Actions - Desarrollo';
  }
}
