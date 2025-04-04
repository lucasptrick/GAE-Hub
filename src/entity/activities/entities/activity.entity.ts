import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from 'src/entity/student/entities/student.entity'; 

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoriaAtividade: string;

  @Column()
  atividadeRealizada: string;

  @Column()
  cargaHoraria: number;

  @Column()
  semestre: number;

  @Column()
  certificadoURL: string;

  @ManyToOne(() => Student, (student) => student.activities, { onDelete: 'CASCADE' })
  student: Student;
}
