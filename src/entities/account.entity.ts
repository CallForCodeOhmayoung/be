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
export class AccountEntity extends Model<AccountEntity> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT)
  public id: number;

  @Column(DataType.CHAR)
  public phoneNumber: string;

  @Column(DataType.CHAR)
  public name: string;

  @Column(DataType.TEXT)
  public password: string;

  @Column(DataType.TINYINT({ length: 1 }))
  public isVerified: number;

  @Column(DataType.TEXT)
  public qrCode: string;

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
