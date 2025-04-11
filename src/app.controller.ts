import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentStudent } from './auth/decorators/current-student.decorator';
import { Student } from './entity/student/entities/student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentStudent() student: Student) {
    return student;
  }
}
