import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsPhoneNumber } from 'class-validator';

class CreateAccessTokenDto {
  @ApiProperty({
    description: '핸드폰 번호',
    required: true,
  })
  @IsNumberString()
  @IsPhoneNumber('KR')
  @IsNotEmpty()
  public phoneNumber: string;

  @ApiProperty({
    description: '패스워드',
    required: true,
  })
  @IsNotEmpty()
  public password: string;
}

export default CreateAccessTokenDto;
