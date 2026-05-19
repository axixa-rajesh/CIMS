import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('institutes')
export class Institute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}