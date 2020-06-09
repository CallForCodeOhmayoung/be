import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import SignUpDto from '@app/authentication/dto/sign-up.dto';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseReceiptDecorator } from '@app/shared/decorators/common-response-receipt.decorator';
import { concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import AccessTokenModel from '@app/authentication/model/access-token.model';
import { BaseController } from '@app/shared/controller/base.controller';
import AuthenticationControllerInterface from '@app/authentication/interface/authentication.controller.interface';
import CreateAccessTokenDto from '@app/authentication/dto/create-access-token.dto';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController extends BaseController
  implements AuthenticationControllerInterface {
  public constructor(
    private readonly authenticationService: AuthenticationService,
  ) {
    super();
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: AccessTokenModel,
  })
  @ApiOperation({ summary: `액세스 토큰을 발행한다.` })
  @CommonResponseReceiptDecorator()
  @Post('token')
  public createAccessToken(
    @Body() { phoneNumber, password }: CreateAccessTokenDto,
  ): Observable<AccessTokenModel> {
    return this.authenticationService.existsByPhoneNumber(phoneNumber).pipe(
      concatMap(exists => {
        if (!exists) {
          throw new BadRequestException();
        }

        return this.authenticationService.getByPhoneNumber(phoneNumber);
      }),
      concatMap(account => {
        const verifyPassword$ = this.authenticationService.verifyPassword(
          password,
          account.password,
        );
        return verifyPassword$.pipe(
          concatMap(verified => {
            if (!verified) {
              throw new BadRequestException();
            }
            return this.authenticationService.createAccessToken(account);
          }),
        );
      }),
    );
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: AccessTokenModel,
  })
  @ApiOperation({ summary: `회원가입을 진행한다.` })
  @CommonResponseReceiptDecorator()
  @Post('sign-up')
  public signUp(
    @Body() { phoneNumber, password }: SignUpDto,
  ): Observable<AccessTokenModel> {
    return this.authenticationService.existsByPhoneNumber(phoneNumber).pipe(
      concatMap(exists => {
        if (exists) {
          throw new BadRequestException('이미 등록된 핸드폰 번호 입니다.');
        }

        return this.authenticationService.signUp(phoneNumber, password);
      }),
    );
  }
}
