import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('live_class_participants')
export class LiveClassParticipant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  live_class_id: string;

  @Column({ type: 'varchar', length: 36 })
  user_id: string;

  @Column({ type: 'datetime' })
  joined_at: Date;

  @Column({ type: 'datetime', nullable: true })
  left_at: Date;

  @Column({ nullable: true })
  attendance_status: string;

  @CreateDateColumn()
  created_at: Date;
}
