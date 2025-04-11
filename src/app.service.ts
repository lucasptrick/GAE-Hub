import { Injectable } from '@nestjs/common';
import { IsPublic } from '../src/auth/decorators/is-public.decorator';

// @IsPublic()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
