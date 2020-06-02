import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AccountEntity } from '@app/entities/account.entity';
import { AccessEntity } from '@app/entities/access.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
      } as SequelizeOptions);

      sequelize.addModels([AccountEntity, AccessEntity]);

      await sequelize.authenticate();
      // await sequelize.sync({force: true});

      return sequelize;
    },
    inject: [ConfigService],
  },
];
