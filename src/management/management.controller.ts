import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { MeService } from '@app/me/me.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseReceiptDecorator } from '@app/shared/decorators/common-response-receipt.decorator';
import TaggingDto from '@app/shared/dto/tagging.dto';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseController } from '@app/shared/controller/base.controller';

@ApiTags('management')
@Controller('managements')
export class ManagementController extends BaseController {
  public constructor(private readonly meService: MeService) {
    super();
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({ summary: `건물에 태깅을 한다.` })
  @CommonResponseReceiptDecorator()
  @Post('tagging')
  public tagging(@Body() { address, isOut }: TaggingDto): Observable<void> {
    return from(this.meService.tagging(address, isOut)).pipe(map(() => {}));
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({ summary: `건물에 혼잡도를 조회한다.` })
  @CommonResponseReceiptDecorator()
  @Get('congestion')
  public congestion() {}
}
