import { Observable } from 'rxjs';
import ProfileModel from '@app/me/model/profile.model';

interface MeControllerInterface {
  fetchProfile(phoneNumber: string): Observable<ProfileModel>;
}

export default MeControllerInterface;