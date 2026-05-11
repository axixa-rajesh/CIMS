import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('report_exports')
export class ReportExport {
  @PrimaryGeneratedColumn()
  id!: number;

  // FK → users.id (Student 2 ki entity - kisne report export ki)
  @Column()
  user_id!: number;

  // FK → branches.id (Student 2 ki entity - kis branch ki report)
  @Column({ nullable: true })
  branch_id!: number;

  // FK → academic_sessions.id (Student 2 ki entity - kis session ki report)
  @Column({ nullable: true })
  session_id!: number;

  @Column()
  report_name!: string;

  @Column({ type: 'text', nullable: true })
  filter_json!: string;

  @Column({ type: 'text' })
  file_url!: string;

  @CreateDateColumn()
  exported_at!: Date;
}
