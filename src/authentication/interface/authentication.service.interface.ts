import { AccountEntity } from '@app/entities/account.entity';
import { Observable } from 'rxjs';
import AccessTokenModel from '@app/authentication/model/access-token.model';

interface AuthenticationServiceInterface {
  getByPhoneNumber(phoneNumber: string): Observable<AccountEntity>;
  encryptedPassword(password: string): string;
  createAccessToken(account: AccountEntity): Observable<AccessTokenModel>;
  signUp(phoneNumber: string, password: string): Observable<AccessTokenModel>;
  existsByPhoneNumber(phoneNumber: string): Observable<boolean>;
}

export default AuthenticationServiceInterface;
