import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { AccountEntity } from '@app/entities/account.entity';
import { from, Observable } from 'rxjs';
import ProfileModel from '@app/me/model/profile.model';
import MeServiceInterface from '@app/me/interface/me.service.interface';
import { AccessEntity } from '@app/entities/access.entity';

@Injectable()
export class MeService implements MeServiceInterface {
  public constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private readonly accountRepository: Repository<AccountEntity>,
    @Inject('ACCESS_REPOSITORY')
    private readonly accessRepository: Repository<AccessEntity>,
  ) {}

  public fetchProfileByPhoneNumber(
    phoneNumber: string,
  ): Observable<ProfileModel> {
    return from(
      this.accountRepository.findOne({
        where: { phoneNumber },
        attributes: ['phoneNumber', 'qrCode'],
      }),
    );
  }

  public tagging(address: string, isOut: number) {
    return from(this.accessRepository.create({ address, isOut }));
  }
}
