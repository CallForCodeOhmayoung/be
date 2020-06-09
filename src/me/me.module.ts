import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { ConfigModule } from '@nestjs/config';
import authenticationProvider from '@app/authentication/authentication.provider';

@Module({
  imports: [ConfigModule],
  providers: [MeService, ...authenticationProvider],
  controllers: [MeController],
})
export class MeModule {}
