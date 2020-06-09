import { ApiProperty } from '@nestjs/swagger';

abstract class AccessTokenModel {
  @ApiProperty({
    description: '액세스 토큰',
    required: true,
  })
  public token: string;

  @ApiProperty({
    description: '토큰 만료 시간',
    required: true,
  })
  public expiredAt: number;
}

export default AccessTokenModel;
