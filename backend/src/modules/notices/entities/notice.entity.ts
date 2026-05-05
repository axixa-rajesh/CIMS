import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('notices')
export class Notice {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column('uuid')
  institute_id!: string;

  @Index()
  @Column('uuid')
  branch_id!: string;

  @Column({ length: 150 })
  title!: string;

  @Column('text')
  description!: string;

  @Column({ length: 50 })
  notice_type!: string;

  @Column({ type: 'datetime' })
  publish_at!: Date;

  @Column({ type: 'datetime' })
  expiry_at!: Date;

  @Index()
  @Column('uuid')
  created_by_user_id!: string;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}