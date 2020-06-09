import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IdentificationModule } from './identification/identification.module';
import { IdentificationService } from './identification/identification.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MeModule } from './me/me.module';
import { databaseProviders } from '@app/shared/provider/database.provider';
import { ConfigModule } from '@nestjs/config';
import { MorganModule } from 'nest-morgan';

@Module({
  imports: [
    MorganModule.forRoot(),
    IdentificationModule,
    AuthenticationModule,
    MeModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [IdentificationService, ...databaseProviders],
})
export class AppModule {}
