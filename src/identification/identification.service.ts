import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { Observable, from } from 'rxjs';
import AccessTokenModel from '@app/authentication/model/access-token.model';

@Injectable()
export class IdentificationService {
  public generateToURL(
    phoneNumber: string,
    token: AccessTokenModel,
  ): Observable<string> {
    return from(qrcode.toDataURL(JSON.stringify({ phoneNumber, ...token })));
  }
}
