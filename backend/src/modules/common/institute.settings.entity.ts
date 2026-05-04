import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institute_settings')
export class InstituteSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institute_id: number;

  @Column()
  attendance_mode: string;

  @Column()
  live_class_provider: string;

  @Column({ type: 'boolean', default: false })
  allow_parent_portal: boolean;

  @Column()
  currency: string;

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