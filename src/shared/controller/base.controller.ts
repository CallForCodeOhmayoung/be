import { UseInterceptors } from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';
import { CommonHeaderReceiptDecorator } from '@app/shared/decorators/common-header-receipt.decorator';

@CommonHeaderReceiptDecorator()
@UseInterceptors(MorganInterceptor('combined'))
export class BaseController {}
