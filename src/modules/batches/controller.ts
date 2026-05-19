import { Controller } from '@nestjs/common';
import { BatchesService } from './service';

@Controller('batches')
export class BatchesController {
  constructor(private readonly service: BatchesService) {}
}
