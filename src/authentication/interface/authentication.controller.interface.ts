import SignUpDto from '@app/authentication/dto/sign-up.dto';
import { Observable } from 'rxjs';
import AccessTokenModel from '@app/authentication/model/access-token.model';

interface AuthenticationControllerInterface {
  signUp({ phoneNumber, password }: SignUpDto): Observable<AccessTokenModel>;
}

export default AuthenticationControllerInterface;
