import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('notice_targets')
export class NoticeTarget {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column('uuid')
  notice_id!: string;

  @Column({ length: 50 })
  target_type!: string;

  @Column('uuid')
  target_id!: string;

  @CreateDateColumn()
  created_at!: Date;
}