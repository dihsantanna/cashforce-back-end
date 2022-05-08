import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';
import { UserAttributes, UserCreationAttributes } from 'src/types/UserCreationAttributes.interface';

@Table({
  timestamps: true,
  modelName: 'User',
  tableName: 'users'
})
export default class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column(DataTypes.STRING)
  name: string;
  @Column(DataTypes.STRING)
  email: string;
  @Column(DataTypes.STRING)
  phoneNumber: string;
  @Column(DataTypes.STRING)
  mobile: string;
  @Column(DataTypes.STRING)
  departament: string;
  @Column(DataTypes.STRING)
  verificationCode: string;
  @Column(DataTypes.TINYINT)
  emailChecked: number;
  @Column(DataTypes.TINYINT)
  cashforceAdm: number;
}