import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { AccountEntity } from '@app/entities/account.entity';
import { from, Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import * as moment from 'moment';
import AccessTokenModel from '@app/authentication/model/access-token.model';
import AuthenticationServiceInterface from '@app/authentication/interface/authentication.service.interface';
import * as bcrypt from 'bcryptjs';
import { IdentificationService } from '@app/identification/identification.service';

@Injectable()
export class AuthenticationService implements AuthenticationServiceInterface {
  public constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private readonly accountRepository: Repository<AccountEntity>,
    private readonly configService: ConfigService,
    private readonly identificationService: IdentificationService,
  ) {}

  public verifyPassword(
    plainPassword: string,
    encrypedPassword: string,
  ): Observable<boolean> {
    return of(bcrypt.compareSync(plainPassword, encrypedPassword));
  }

  public encryptedPassword(password: string): string {
    const saltRounds = 10;
    return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
  }

  public createAccessToken(
    account: AccountEntity,
  ): Observable<AccessTokenModel> {
    const expiresIn = 60 * 60 * (24 * 3);
    const expiredAt = Number(
      moment()
        .add(expiresIn, 'seconds')
        .format('x'),
    );
    const { phoneNumber } = account;

    const signToken = jwt.sign(
      { phoneNumber },
      this.configService.get<string>('AUTHENTICATION_PRIVATE_KEY'),
      { expiresIn },
    );

    const token = {
      token: signToken,
      expiredAt,
    };

    return this.identificationService.generateToURL(phoneNumber, token).pipe(
      concatMap(qr => from(account.update({ qr }))),
      map(() => token),
    );
  }

  public signUp(
    phoneNumber: string,
    password: string,
  ): Observable<AccessTokenModel> {
    const account$ = from(
      this.accountRepository.create({
        phoneNumber,
        password: this.encryptedPassword(password),
      }),
    );
    return account$.pipe(concatMap(account => this.createAccessToken(account)));
  }

  public getByPhoneNumber(phoneNumber: string): Observable<AccountEntity> {
    return from(this.accountRepository.findOne({ where: { phoneNumber } }));
  }

  public existsByPhoneNumber(phoneNumber: string): Observable<boolean> {
    return from(
      this.accountRepository.count({
        where: { phoneNumber },
      }),
    ).pipe(map(count => count > 0));
  }
}
