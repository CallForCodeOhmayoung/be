import TaggingDto from '@app/shared/dto/tagging.dto';
import { Observable } from 'rxjs';
import CongestionDto from '@app/management/dto/congestion.dto';
import CongestionModel from '@app/shared/model/congestion.model';
import ExploreDto from '@app/management/dto/explore.dto';
import ExploreModel from '@app/management/model/explore.model';

interface ManagementControllerInterface {
  tagging(
    { address, isOut, latitude, longitude }: TaggingDto,
    phoneNumber: string,
  ): Observable<void>;
  congestion({ address }: CongestionDto): Observable<CongestionModel>;
  explore({ latitude, longitude }: ExploreDto): Observable<ExploreModel[]>;
}

export default ManagementControllerInterface;
