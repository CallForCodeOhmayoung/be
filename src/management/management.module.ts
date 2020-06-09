import { Module } from '@nestjs/common';
import { ManagementController } from './management.controller';
import { MeService } from '@app/me/me.service';
import authenticationProvider from '@app/authentication/authentication.provider';
import { ConfigModule } from '@nestjs/config';
import { ManagementService } from './management.service';

@Module({
  imports: [ConfigModule],
  controllers: [ManagementController],
  providers: [MeService, ...authenticationProvider, ManagementService],
})
export class ManagementModule {}
