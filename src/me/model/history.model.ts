import { ApiProperty } from '@nestjs/swagger';

class HistoryModel {
  @ApiProperty({
    description: '주소',
    required: true,
  })
  public address: string;

  @ApiProperty({
    description: '체크아웃 여부 (0 = 출입, 1 = 퇴실)',
    required: true,
    example: 0,
  })
  public isOut: number;

  @ApiProperty({
    description: '위도',
    required: true,
  })
  public latitude: string;

  @ApiProperty({
    description: '경도',
    required: true,
  })
  public longitude: string;

  @ApiProperty({
    description: '생성일',
    required: true,
  })
  public createdAt: Date;
}

export default HistoryModel;
