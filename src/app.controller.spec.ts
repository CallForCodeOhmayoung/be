import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { IdentificationModule } from './identification/identification.module';
import { IdentificationService } from './identification/identification.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [IdentificationModule],
      controllers: [AppController],
      providers: [IdentificationService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
