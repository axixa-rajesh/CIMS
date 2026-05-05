export class UpdateNoticeDto {
  title?: string;
  description?: string;
  notice_type?: string;
  publish_at?: Date;
  expiry_at?: Date;
  status?: string;
}