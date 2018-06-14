/* tslint:disable:variable-name */

import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Is,
  IsDate,
  IsEmail,
  Model,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

import Org from './org';

@Table({tableName: 'user', freezeTableName: true, schema: 'public' })
export default class User extends Model<User> {

  @AllowNull(false)
  @Is('custom', (v) => {
    const pattern = /^[\p{L}-]{1,20}$/u; // allowing unicode characters
    if (!v.match(pattern))
      throw new Error(`"${v}" not valid`);
  })
  @Column({type: DataType.STRING(20)})
  public given_name: string;

  @AllowNull(false)
  @Is('custom', (v) => {
    const pattern = /^[\p{L}\s]{1,30}$/u;
    if (!v.match(pattern))
      throw new Error(`"${v}" not valid`);
  })
  @Column({type: DataType.STRING(30)})
  public last_name: string;

  @AllowNull(false)
  @IsEmail
  @Column({type: DataType.STRING(254)})
  public email: string;

  @AllowNull(false)
  @Column({type: DataType.BOOLEAN})
  public email_verified: boolean;

  @AllowNull(false)
  @ForeignKey(() => Org)
  @Column({type: DataType.INTEGER})
  public org_id: number;

  @BelongsTo(() => Org)
  public organization: Org;

  @Column({type: DataType.STRING(60)})
  public password: string;

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;
}
