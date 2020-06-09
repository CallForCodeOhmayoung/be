import { Controller, UseGuards } from '@nestjs/common';
import AppInterface from './app.interface';
import { BaseController } from '@app/shared/controller/base.controller';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('management')
@Controller()
export class AppController extends BaseController implements AppInterface {}
