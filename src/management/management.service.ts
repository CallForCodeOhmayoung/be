import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { AccessEntity } from '@app/entities/access.entity';
import { from, Observable } from 'rxjs';
import CongestionModel from '@app/shared/model/congestion.model';
import { map } from 'rxjs/operators';
import * as Sequelize from 'sequelize';
import ExploreModel from '@app/management/model/explore.model';

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
      SELECT * FROM callforcode.AccessEntities WHERE address = "${address}" and isOut = 0 and id IN (
        SELECT MAX(id)
          FROM AccessEntities
          GROUP BY address, accountId
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

        const maximumQuotes = 500;
        const quotesPercent = (total / maximumQuotes) * 100;

        return {
          total: total,
          status: quotesPercent < 50 ? '쾌적' : '혼잡',
          quotesPercent,
        };
      }),
    );
  }

  public explore(latitude: number, longitude: number) {
    return from(
      this.accessRepository.sequelize.query(
        `
        SELECT *, count(*) as total,
        ( 3959 * acos( cos( radians(" ${latitude} ") ) * cos( radians( latitude ) ) 
        * cos( radians( longitude ) - radians(" ${longitude} ") ) 
        + sin( radians(" ${latitude} ") ) * sin( radians( latitude ) ) ) ) AS distance
        FROM callforcode.AccessEntities
        where isOut = 0 and id IN (
        SELECT MAX(id)
          FROM AccessEntities
          GROUP BY address, accountId
      )
         group by address HAVING distance < 5
        `,
        {
          raw: true,
          type: Sequelize.QueryTypes.SELECT,
        },
      ),
    ).pipe(
      map(rows => {
        return rows.map(row => this.convert(row as AccessEntity));
      }),
    );
  }

  public convert(accessEntity: AccessEntity): ExploreModel {
    const maximumQuotes = 500;
    const quotesPercent = (accessEntity['total'] / maximumQuotes) * 100;

    return {
      distance: accessEntity['distance'],
      latitude: accessEntity['latitude'],
      longitude: accessEntity['longitude'],
      address: accessEntity['address'],
      total: accessEntity['total'],
      status: quotesPercent < 50 ? '쾌적' : '혼잡',
      quotesPercent,
    };
  }
}
