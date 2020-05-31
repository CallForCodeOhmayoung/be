import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { Observable, from } from 'rxjs';
import CoordinateModel from './model/coordinate.model';

@Injectable()
export class IdentificationService {
  public verifyByPhoneNumber(phoneNumber: string) {}

  public generateToURL(name: string, phoneNumber: string): Observable<string> {
    return from(qrcode.toDataURL(JSON.stringify({ name, phoneNumber })));
  }
}
