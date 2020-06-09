import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '@app/shared/controller/base.controller';

@ApiTags('me')
@Controller('me')
export class MeController extends BaseController {
  public constructor() {
    super();
  }
}
