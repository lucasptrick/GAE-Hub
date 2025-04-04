import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly repository: Repository<Student>) {}

    async create(dto: CreateStudentDto) {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
    
      const student = this.repository.create({
        ...dto,
        password: hashedPassword,
      });
    
      const savedStudent = await this.repository.save(student);
    
      return {
        ...savedStudent,
        password: undefined, 
      };
    }
    

  async findAll() {
    const students = await this.repository.find();
    return students.map(({ password, ...student }) => student);
  }

  async findByEmail(email: string) {
    const student = await this.repository.findOneBy({ email });
    if (!student) return null;
    const { password, ...result } = student;
    return result;
  }
  

  async update(email: string, dto: UpdateStudentDto) {
    const student = await this.repository.findOneBy({ email });
    if (!student) return null;

    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }

    this.repository.merge(student, dto);
    const updatedStudent = await this.repository.save(student);

    const { password, ...result } = updatedStudent;
    return result;
  }

  async remove(email: string) {
    const student = await this.repository.findOneBy({ email });
    if (!student) return null;

    await this.repository.remove(student);
    return { message: 'Student removed successfully' };
  }
}
