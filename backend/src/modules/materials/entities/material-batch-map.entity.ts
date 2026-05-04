import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('material_batch_maps')
export class MaterialBatchMap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  material_id: number;

  @Column()
  batch_id: number;

  @CreateDateColumn()
  created_at: Date;
}
