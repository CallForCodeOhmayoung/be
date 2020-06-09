import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  public signUp(phoneNumber: string, password: string) {
    console.log(phoneNumber, password);
  }
}
