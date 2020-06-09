import { Observable } from 'rxjs';
import ProfileModel from '@app/me/model/profile.model';

interface MeServiceInterface {
  fetchProfileByPhoneNumber(phoneNumber: string): Observable<ProfileModel>;
}

export default MeServiceInterface;