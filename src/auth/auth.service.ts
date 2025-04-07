import { Injectable } from '@nestjs/common';
import { StudentService } from 'src/entity/student/student.service';
import * as bcrypt from 'bcrypt';
import { Student } from 'src/entity/student/entities/student.entity';
import { StudentPayload } from './models/StudentPayload';
import { JwtService } from '@nestjs/jwt';
import { StudentToken } from './models/StudentToken';

@Injectable()
export class AuthService {
    constructor(private readonly studentService: StudentService, private readonly jwtService: JwtService) {}
    
    login(student: Student): StudentToken {
        const payload: StudentPayload = {
            sub: student.id,
            nome: student.nome,
            email: student.email,
            matricula: student.matricula,
        };

        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token: jwtToken,
        };
    }

    async validateUser(email: string, password: string) {
        const student = await this.studentService.findByEmailWithPassword(email);
        if (student) {
            const isPasswordValid = await bcrypt.compare(password, student.password);

            if (isPasswordValid) {
                return {
                    ...student,
                    password: undefined,
                }
            }
        }

        throw new Error('Email address or password provided is incorrect.');
    }
}
