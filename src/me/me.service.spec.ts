import { Test, TestingModule } from '@nestjs/testing';
import { MeService } from './me.service';
import { MorganModule } from 'nest-morgan';

describe('MeService', () => {
  let service: MeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MorganModule.forRoot()],
      providers: [MeService],
    }).compile();

    service = module.get<MeService>(MeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
