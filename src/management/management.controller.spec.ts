import { Test, TestingModule } from '@nestjs/testing';
import { ManagementController } from './management.controller';
import { ConfigModule } from '@nestjs/config';
import { MeService } from '@app/me/me.service';
import authenticationProvider from '@app/authentication/authentication.provider';
import { MorganModule } from 'nest-morgan';
import { ManagementService } from '@app/management/management.service';

describe('Management Controller', () => {
  let controller: ManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, MorganModule.forRoot()],
      controllers: [ManagementController],
      providers: [MeService, ManagementService, ...authenticationProvider],
    }).compile();

    controller = module.get<ManagementController>(ManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
