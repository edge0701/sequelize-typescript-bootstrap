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
  Model,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({tableName: 'org', freezeTableName: true, schema: 'public' })
export default class Org extends Model<Org> {

    @AllowNull(false)
    @Is(new RegExp(/^[\p{L}\p{N}0-9 .-]{1,40}$/, 'u'))
    @Column({type: DataType.STRING(40)})
    public name: string;

    @CreatedAt
    public created_at: Date;

    @UpdatedAt
    public updated_at: Date;
}
