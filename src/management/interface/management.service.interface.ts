import { AccessEntity } from '@app/entities/access.entity';
import ExploreModel from '@app/management/model/explore.model';
import { Observable } from 'rxjs';
import CongestionModel from '@app/shared/model/congestion.model';

interface ManagementServiceInterface {
  convert(accessEntity: AccessEntity): ExploreModel;
  explore(latitude: number, longitude: number): Observable<ExploreModel[]>;
  congestionByAddress(address: string): Observable<CongestionModel>;
}

export default ManagementServiceInterface;
