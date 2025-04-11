import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Student } from 'src/entity/student/entities/student.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentStudent = createParamDecorator(
  (data: unknown, context: ExecutionContext): Student => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);