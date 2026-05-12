import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('test_questions')
export class TestQuestion {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('uuid')
    test_id!: string;

    @Column('text')
    question_text!: string;

    @Column({ type: 'varchar', length: 50 })
    question_type!: string;

    @Column({ nullable: true }) option_a?: string;
    @Column({ nullable: true }) option_b?: string;
    @Column({ nullable: true }) option_c?: string;
    @Column({ nullable: true }) option_d?: string;

    @Column()
    correct_answer!: string;

    @Column('int')
    marks!: number;
    
    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}