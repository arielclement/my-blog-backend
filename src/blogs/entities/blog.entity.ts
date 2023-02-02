import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Blog extends Model {
  @Column
  title: string;

  @Column
  body: string;

  @Column
  author: string;
}
