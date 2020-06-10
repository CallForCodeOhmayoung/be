import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
  AllowNull,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table
export class AccessEntity extends Model<AccessEntity> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT)
  public id: number;

  @Column(DataType.BIGINT)
  public accountId: number;

  @Column(DataType.TINYINT({ length: 1 }))
  public isOut: number;

  @Column(DataType.CHAR)
  public address: string;

  @Column(DataType.DECIMAL(10, 8))
  public latitude: number;

  @Column(DataType.DECIMAL(11, 8))
  public longitude: number;

  @CreatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  public createdAt: Date;

  @UpdatedAt
  @AllowNull(true)
  @Column(DataType.DATE)
  public updatedAt: Date;

  @DeletedAt
  @AllowNull(true)
  @Column(DataType.DATE)
  public deleteAt: Date;
}
