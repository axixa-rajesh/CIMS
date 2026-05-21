import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('institute_settings')
export class InstituteSetting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  key: string;
}
