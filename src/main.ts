import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerBootstrap from './bootstrap/swagger.bootstrap';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  swaggerBootstrap(app);
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
