import { Injectable } from '@nestjs/common';
import { LiveClassesRepository } from './live-classes.repository';
import { CreateLiveClassDto, UpdateLiveClassDto } from './dto/create-live-class.dto';

@Injectable()
export class LiveClassesService {
  constructor(private readonly liveClassesRepository: LiveClassesRepository) {}

  create(createLiveClassDto: CreateLiveClassDto) {
    return this.liveClassesRepository.save(createLiveClassDto);
  }

  findAll() {
    return this.liveClassesRepository.find();
  }

  findOne(id: number) {
    return this.liveClassesRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateLiveClassDto: UpdateLiveClassDto) {
    return this.liveClassesRepository.update(id, updateLiveClassDto);
  }

  remove(id: number) {
    return this.liveClassesRepository.delete(id);
  }
}
