import { Test, TestingModule } from '@nestjs/testing';
import { MeController } from './me.controller';
import { MorganModule } from 'nest-morgan';

describe('Me Controller', () => {
  let controller: MeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MorganModule.forRoot()],
      controllers: [MeController],
    }).compile();

    controller = module.get<MeController>(MeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
