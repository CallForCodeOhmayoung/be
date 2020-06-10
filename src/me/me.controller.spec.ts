import { Test, TestingModule } from '@nestjs/testing';
import { MeController } from './me.controller';
import { MorganModule } from 'nest-morgan';
import { ConfigModule } from '@nestjs/config';
import { MeService } from '@app/me/me.service';
import authenticationProvider from '@app/authentication/authentication.provider';

describe('Me Controller', () => {
  let controller: MeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MorganModule.forRoot(), ConfigModule],
      controllers: [MeController],
      providers: [MeService, ...authenticationProvider],
    }).compile();

    controller = module.get<MeController>(MeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
