import { Controller } from '@nestjs/common';
import AppInterface from './app.interface';

@Controller()
export class AppController implements AppInterface {}
