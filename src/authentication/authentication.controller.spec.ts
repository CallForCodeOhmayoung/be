import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from '../authentication/authentication.service';
import authenticationProvider from '../authentication/authentication.provider';
import { ConfigModule } from '@nestjs/config';
import { MorganModule } from 'nest-morgan';
import { IdentificationService } from '@app/identification/identification.service';

describe('Authentication Controller', () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, MorganModule.forRoot()],
      controllers: [AuthenticationController],
      providers: [
        AuthenticationService,
        ...authenticationProvider,
        IdentificationService,
      ],
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
