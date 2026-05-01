import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('academic_sessions')
export class AcademicSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institute_id: number;

  @Column()
  branch_id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @Column({ type: 'boolean', default: false })
  is_current: boolean;

  @Column()
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}