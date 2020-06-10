import { Test, TestingModule } from '@nestjs/testing';
import { MeService } from './me.service';
import { MorganModule } from 'nest-morgan';
import authenticationProvider from '@app/authentication/authentication.provider';
import { ConfigModule } from '@nestjs/config';

describe('MeService', () => {
  let service: MeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, MorganModule.forRoot()],
      providers: [MeService, ...authenticationProvider],
    }).compile();

    service = module.get<MeService>(MeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
