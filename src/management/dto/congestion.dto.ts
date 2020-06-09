import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class CongestionDto {
  @ApiProperty({
    description: '주소',
    required: true,
  })
  @IsNotEmpty()
  public address: string;
}

export default CongestionDto;
