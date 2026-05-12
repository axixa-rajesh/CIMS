export class CreateTicketMessageDto {
  ticket_id!: string;
  sender_user_id!: string;
  message_text!: string;
  attachment_url?: string;
}