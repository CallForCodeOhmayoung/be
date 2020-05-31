import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IdentificationModule } from './identification/identification.module';
import { IdentificationService } from './identification/identification.service';

@Module({
  imports: [IdentificationModule],
  controllers: [AppController],
  providers: [IdentificationService],
})
export class AppModule {}
