import { ApiProperty } from '@nestjs/swagger';

abstract class CongestionModel {
  @ApiProperty({
    description: '현재 머무는 사람 수',
    required: true,
    example: 77,
  })
  public total: number;

  @ApiProperty({
    description: '혼잡도 plain text',
    required: true,
    example: '쾌적',
  })
  public status: string;

  @ApiProperty({
    description: '혼잡도',
    required: true,
    example: 30,
  })
  public quotesPercent: number;
}

export default CongestionModel;
