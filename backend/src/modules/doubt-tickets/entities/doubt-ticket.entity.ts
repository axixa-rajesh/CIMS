import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('doubt_tickets')
export class DoubtTicket {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column('uuid')
  student_id!: string;

  @Index()
  @Column('uuid')
  subject_id!: string;

  @Index()
  @Column('uuid')
  teacher_id!: string;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @Column({ length: 20 })
  priority!: string;

  @Column({ default: 'OPEN' })
  ticket_status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}