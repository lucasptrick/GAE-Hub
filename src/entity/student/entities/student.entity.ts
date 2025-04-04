import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Activity } from 'src/entity/activities/entities/activity.entity';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  matricula: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; 

  @OneToMany(() => Activity, (activity) => activity.student)
  activities: Activity[];
}
