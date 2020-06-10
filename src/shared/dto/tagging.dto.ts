import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

abstract class TaggingDto {
  @ApiProperty({
    description: '주소 ',
    required: true,
    example: '서울시 마포구 마포대로 53',
  })
  @IsNotEmpty()
  public address: string;

  @ApiProperty({
    description: '체크아웃 여부 (0 = 출입, 1 = 퇴실)',
    required: true,
    example: 0,
  })
  @IsNotEmpty()
  public isOut: number;

  @ApiProperty({
    description: '위도',
    required: true,
  })
  @IsLatitude()
  @IsNotEmpty()
  public latitude: number;

  @ApiProperty({
    description: '경도',
    required: true,
  })
  @IsLongitude()
  @IsNotEmpty()
  public longitude: number;
}

export default TaggingDto;
