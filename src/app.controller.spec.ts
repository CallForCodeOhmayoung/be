import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { IdentificationModule } from './identification/identification.module';
import { IdentificationService } from './identification/identification.service';
import { MorganModule } from 'nest-morgan';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { MeModule } from '@app/me/me.module';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MorganModule.forRoot(),
        IdentificationModule,
        AuthenticationModule,
        MeModule,
        ConfigModule,
      ],
      controllers: [AppController],
      providers: [IdentificationService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
