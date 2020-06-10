import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

abstract class TaggingDto {
  @ApiProperty({
    description: '풀 주소 ',
    required: true,
  })
  @IsNotEmpty()
  public address: string;

  @ApiProperty({
    description: '체크아웃 여부',
    required: true,
    example: '0 || 1',
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
