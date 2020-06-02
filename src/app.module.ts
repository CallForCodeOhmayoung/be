import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IdentificationModule } from './identification/identification.module';
import { IdentificationService } from './identification/identification.service';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [IdentificationModule, AuthenticationModule],
  controllers: [AppController],
  providers: [IdentificationService],
})
export class AppModule {}
