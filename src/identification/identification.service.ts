import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { Observable, from } from 'rxjs';

@Injectable()
export class IdentificationService {
  public generateToURL(phoneNumber: string): Observable<string> {
    return from(qrcode.toDataURL(JSON.stringify({ phoneNumber })));
  }
}
