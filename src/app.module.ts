import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IdentificationModule } from './identification/identification.module';
import { IdentificationService } from './identification/identification.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MeModule } from './me/me.module';

@Module({
  imports: [IdentificationModule, AuthenticationModule, MeModule],
  controllers: [AppController],
  providers: [IdentificationService],
})
export class AppModule {}
