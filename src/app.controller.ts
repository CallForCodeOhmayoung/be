import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import AppInterface from './app.interface';
import { BaseController } from '@app/shared/controller/base.controller';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponseReceiptDecorator } from '@app/shared/decorators/common-response-receipt.decorator';
import TaggingDto from '@app/shared/dto/tagging.dto';
import { from, Observable } from 'rxjs';
import { MeService } from '@app/me/me.service';
import { map } from 'rxjs/operators';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('management')
@Controller()
export class AppController extends BaseController implements AppInterface {
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
