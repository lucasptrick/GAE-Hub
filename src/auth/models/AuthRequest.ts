import { Request } from "express";
import { Student } from '../../entity/student/entities/student.entity';

export interface AuthRequest extends Request {
    user: Student;
}