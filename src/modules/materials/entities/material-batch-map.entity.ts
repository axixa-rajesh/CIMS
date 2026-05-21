import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('material_batch_maps')
export class MaterialBatchMap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  material_id: string;

  @Column({ type: 'varchar', length: 36 })
  batch_id: string;

  @CreateDateColumn()
  created_at: Date;
}
