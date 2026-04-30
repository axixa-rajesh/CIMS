import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmissionLeadDto } from './create-admission-lead.dto';

export class UpdateAdmissionLeadDto extends PartialType(CreateAdmissionLeadDto) {}
