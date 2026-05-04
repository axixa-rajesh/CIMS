import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('live_class_participants')
export class LiveClassParticipant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  live_class_id: number;

  @Column()
  user_id: number;

  @Column({ type: 'datetime', nullable: true })
  joined_at: Date;

  @Column({ type: 'datetime', nullable: true })
  left_at: Date;

  @Column({ type: 'enum', enum: ['present', 'absent'], default: 'absent' })
  attendance_status: string;

  @CreateDateColumn()
  created_at: Date;
}
