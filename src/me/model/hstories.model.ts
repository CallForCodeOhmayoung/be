import HistoryModel from '@app/me/model/history.model';
import { ApiProperty } from '@nestjs/swagger';

abstract class HstoriesModel {
  @ApiProperty({
    description: '이력',
    required: true,
    isArray: true,
    type: HistoryModel,
  })
  public rows: HistoryModel[];

  @ApiProperty({
    description: '전체 수',
    required: true,
  })
  public count: number;
}

export default HstoriesModel;
