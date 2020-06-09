import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

type AccessToken = {
  readonly phoneNumber: string;
  readonly iat: number;
};

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
    private readonly configService: ConfigService
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new ForbiddenException('Missing Authentication Token');
    }

    const plainToken = authorization.substring(7, authorization.length);
    const token = jwt.decode(plainToken) as AccessToken;

    if (!jwt.verify(plainToken, this.configService.get<string>('AUTHENTICATION_PRIVATE_KEY'))) {
      throw new ForbiddenException('Sorry, request access token is invalid.');
    }

    request.headers['account-phone-number'] = token.phoneNumber;

    return true;
  }
}
