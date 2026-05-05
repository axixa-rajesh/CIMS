import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('ticket_messages')
export class TicketMessage {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Index()
    @Column('uuid')
    ticket_id!: string;

    @Index()
    @Column('uuid')
    sender_user_id!: string;

    @Column('text')
    message_text!: string;

    @Column({ nullable: true })
    attachment_url?: string;

    @Column({ type: 'datetime' })
    sent_at!: Date;
}