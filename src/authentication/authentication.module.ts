import { Module } from '@nestjs/common';
import { AuthenticationController } from '@app/authentication/authentication.controller';
import { AuthenticationService } from '@app/authentication/authentication.service';
import authenticationProvider from '@app/authentication/authentication.provider';
import { ConfigModule } from '@nestjs/config';
import { IdentificationService } from '@app/identification/identification.service';

@Module({
  imports: [ConfigModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, ...authenticationProvider, IdentificationService],
})
export class AuthenticationModule {}
