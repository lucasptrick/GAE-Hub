import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    const student = this.studentService.findByEmail(email);
    if (!student) throw new NotFoundException();
    return student;
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(email, updateStudentDto);
  }

  @Delete(':email')
  @HttpCode(204)
  async remove(@Param('email') email: string) {
    const student = this.studentService.remove(email);
    if (!student) throw new NotFoundException();
  }
}
