import { Controller } from '@nestjs/common';
import AppInterface from './app.interface';
import { BaseController } from '@app/shared/controller/base.controller';

@Controller()
export class AppController extends BaseController implements AppInterface {}
