import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BaseController } from '@app/shared/controller/base.controller';
import { CommonResponseReceiptDecorator } from '@app/shared/decorators/common-response-receipt.decorator';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { AccountPhoneNumber } from '@app/shared/decorators/account-phone-number.decorator';
import ProfileModel from '@app/me/model/profile.model';
import { MeService } from '@app/me/me.service';
import { Observable } from 'rxjs';
import HstoriesModel from '@app/me/model/hstories.model';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('me')
@Controller('me')
export class MeController extends BaseController {
  public constructor(private readonly meService: MeService) {
    super();
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: ProfileModel,
  })
  @ApiOperation({ summary: `프로필 정보를 응답한다.` })
  @CommonResponseReceiptDecorator()
  @Get()
  public fetchProfile(
    @AccountPhoneNumber() phoneNumber: string,
  ): Observable<ProfileModel> {
    return this.meService.fetchProfileByPhoneNumber(phoneNumber);
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: HstoriesModel,
  })
  @ApiOperation({ summary: `방문 이력을 조회한다.` })
  @CommonResponseReceiptDecorator()
  @Get('histories')
  public fetchHistories(@AccountPhoneNumber() phoneNumber: string) {
    return this.meService.fetchHistories(phoneNumber);
  }
}
