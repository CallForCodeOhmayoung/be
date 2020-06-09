import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import SignUpDto from '@app/authentication/dto/sign-up.dto';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseReceiptDecorator } from '@app/shared/decorators/common-response-receipt.decorator';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  public constructor(
    private readonly authenticationService: AuthenticationService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiOperation({ summary: `회원가입을 진행한다.` })
  @CommonResponseReceiptDecorator()
  @Post('sign-up')
  public signUp(@Body() { phoneNumber, password }: SignUpDto) {
    return this.authenticationService.signUp(phoneNumber, password);
  }
}
