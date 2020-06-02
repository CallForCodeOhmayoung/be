import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerBootstrap from './bootstrap/swagger.bootstrap';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerBootstrap(app);
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
