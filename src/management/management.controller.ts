import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MeService } from '@app/me/me.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponseReceiptDecorator } from '@app/shared/decorators/common-response-receipt.decorator';
import TaggingDto from '@app/shared/dto/tagging.dto';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseController } from '@app/shared/controller/base.controller';
import { AccountPhoneNumber } from '@app/shared/decorators/account-phone-number.decorator';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import CongestionDto from '@app/management/dto/congestion.dto';
import { ManagementService } from '@app/management/management.service';
import CongestionModel from '@app/shared/model/congestion.model';

@ApiTags('management')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('managements')
export class ManagementController extends BaseController {
  public constructor(
    private readonly meService: MeService,
    private readonly managementService: ManagementService,
  ) {
    super();
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({ summary: `건물에 태깅을 한다.` })
  @CommonResponseReceiptDecorator()
  @Post('tagging')
  public tagging(
    @Body() { address, isOut, latitude, longitude }: TaggingDto,
    @AccountPhoneNumber() phoneNumber: string,
  ): Observable<void> {
    return from(
      this.meService.tagging(address, isOut, phoneNumber, latitude, longitude),
    ).pipe(map(() => {}));
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: CongestionModel,
  })
  @ApiOperation({ summary: `건물에 혼잡도를 조회한다.` })
  @CommonResponseReceiptDecorator()
  @Get('congestion')
  public congestion(
    @Query() { address }: CongestionDto,
  ): Observable<CongestionModel> {
    return this.managementService.congestionByAddress(address);
  }
}
