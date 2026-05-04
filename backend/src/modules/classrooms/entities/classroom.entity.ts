import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('class_rooms')
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branch_id: number;

  @Column({ length: 255 })
  room_name: string;

  @Column({ length: 50, nullable: true })
  room_code: string;

  @Column({ nullable: true })
  capacity: number;

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
