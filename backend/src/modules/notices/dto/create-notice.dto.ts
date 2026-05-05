export class CreateNoticeDto {
  institute_id!: string;
  branch_id!: string;
  title!: string;
  description!: string;
  notice_type!: string;
  publish_at!: Date;
  expiry_at!: Date;
  created_by_user_id!: string;
}