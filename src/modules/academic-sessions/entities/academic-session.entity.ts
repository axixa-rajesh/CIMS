import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('academic_sessions')
export class AcademicSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  session_name: string;
}