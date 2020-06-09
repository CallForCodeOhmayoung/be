import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { AccessEntity } from '@app/entities/access.entity';
import { from, Observable } from 'rxjs';
import CongestionModel from '@app/shared/model/congestion.model';
import { map } from 'rxjs/operators';
import * as Sequelize from 'sequelize';

@Injectable()
export class ManagementService {
  public constructor(
    @Inject('ACCESS_REPOSITORY')
    private readonly accessRepository: Repository<AccessEntity>,
  ) {}
  public congestionByAddress(address: string): Observable<CongestionModel> {
    return from(
      this.accessRepository.sequelize.query(
        `
      SELECT * FROM callforcode.AccessEntities WHERE id IN (
        SELECT MAX(id)
          FROM AccessEntities
          GROUP BY accountId
      );
      `,
        {
          raw: true,
          type: Sequelize.QueryTypes.SELECT,
        },
      ),
    ).pipe(
      map(rows => {
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
          if (!rows[i]['isOut']) {
            total++;
          }
        }
        const quotesPercent = (total / 500) * 100;

        return {
          total: total,
          status: quotesPercent < 50 ? '쾌적' : '혼잡',
          quotesPercent,
        };
      }),
    );
  }
}
