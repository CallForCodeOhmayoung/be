import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { ConfigModule } from '@nestjs/config';
import { MorganModule } from 'nest-morgan';
import authenticationProvider from '@app/authentication/authentication.provider';
import { IdentificationService } from '@app/identification/identification.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, MorganModule.forRoot()],
      providers: [
        AuthenticationService,
        ...authenticationProvider,
        IdentificationService,
      ],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
