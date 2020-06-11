import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerBootstrap from './bootstrap/swagger.bootstrap';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.use(
    cors((req: any, callback: any) => {
      const whitelist = [
        'http://localhost',
        'http://127.0.0.1',
        'http://localhost:1234',
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'https://map.hax0r.info',
      ];
      const corsOptions = {
        origin: whitelist.includes(req.headers.origin as string)
          ? req.headers.origin
          : false,
        credentials: !!whitelist.includes(req.headers.origin as string),
      };
      callback(null, corsOptions);
    }),
  );

  swaggerBootstrap(app);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
