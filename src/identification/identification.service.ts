import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { Observable, from } from 'rxjs';

@Injectable()
export class IdentificationService {
  public generateToURL(name: string, phoneNumber: string): Observable<string> {
    return from(qrcode.toDataURL(JSON.stringify({ name, phoneNumber })));
  }
}
