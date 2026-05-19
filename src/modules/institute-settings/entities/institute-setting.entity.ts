import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('institute_settings')
export class InstituteSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;
}