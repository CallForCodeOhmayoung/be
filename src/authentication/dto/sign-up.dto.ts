import { IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class SignUpDto {
  @ApiProperty({
    description: '핸드폰 번호',
    required: true,
  })
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

export default SignUpDto;
