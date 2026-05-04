import { Controller } from '@nestjs/common';
import { BatchService } from './batches.service';

@Controller('batches')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}
}
