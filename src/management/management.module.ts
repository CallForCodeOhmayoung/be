import { Module } from '@nestjs/common';
import { ManagementController } from './management.controller';
import { MeService } from '@app/me/me.service';
import authenticationProvider from '@app/authentication/authentication.provider';

@Module({
  controllers: [ManagementController],
  providers: [MeService, ...authenticationProvider],
})
export class ManagementModule {}
