import { ApiProperty } from '@nestjs/swagger';

abstract class ExploreModel {
  @ApiProperty({
    description: '주소 ',
    required: true,
    example: '서울시 마포구 마포대로 53',
  })
  public address: string;

  @ApiProperty({
    description: '거리',
    required: true,
  })
  public distance: number;

  @ApiProperty({
    description: '경도',
    required: true,
  })
  public latitude: number;

  @ApiProperty({
    description: '위도',
    required: true,
  })
  public longitude: number;

  @ApiProperty({
    description: '총 수',
    required: true,
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

export default ExploreModel;
