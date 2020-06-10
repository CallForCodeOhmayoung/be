import { Test, TestingModule } from '@nestjs/testing';
import { ManagementService } from './management.service';
import { ConfigModule } from '@nestjs/config';
import { MeService } from '@app/me/me.service';
import authenticationProvider from '@app/authentication/authentication.provider';

describe('ManagementService', () => {
  let service: ManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [ManagementService, MeService, ...authenticationProvider],
    }).compile();

    service = module.get<ManagementService>(ManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
