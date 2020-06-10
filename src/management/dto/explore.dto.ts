import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

class ExploreDto {
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

export default ExploreDto;
