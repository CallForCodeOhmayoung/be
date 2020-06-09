import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

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
}

export default TaggingDto;
