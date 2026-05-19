import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('file_uploads')
export class FileUpload {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  module_name!: string;

  @Column({ nullable: true })
  record_id!: number;

  @Column()
  file_name!: string;

  @Column({ type: 'text' })
  file_url!: string;

  @Column({ nullable: true })
  mime_type!: string;

  // File size in bytes
  @Column({ type: 'bigint', nullable: true })
  file_size!: number;

  // FK → users.id (Student 2 ki entity - kisne upload kiya)
  @Column({ nullable: true })
  uploaded_by_user_id!: number;

  // FK → branches.id (Student 2 ki entity - kis branch se upload hua)
  @Column({ nullable: true })
  branch_id!: number;

  @CreateDateColumn()
  created_at!: Date;
}
