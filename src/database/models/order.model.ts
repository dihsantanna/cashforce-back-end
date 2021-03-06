import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import Buyer from './buyer.model';
import Cnpj from './cnpj.model';
import Provider from './provider.model';
import User from './user.model';

class Order extends Model {
  declare id: number;

  declare orderNfId: string;

  declare orderNumber: string;

  declare orderPath: string;

  declare orderFileName: string;

  declare orderOriginalName: string;

  declare emissionDate: string;

  declare pdfFile: string;

  declare emitedTo: string;

  declare nNf: string;

  declare CTE: string;

  declare value: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare cnpjId: number;

  declare userId: number;

  declare buyerId: number;

  declare providerId: number;

  declare orderStatusBuyer: string;

  declare orderStatusProvider: string;

  declare deliveryReceipt: string;

  declare cargoPackingList: string;

  declare deliveryCtrc: string;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  orderNfId: DataTypes.STRING,
  orderNumber: DataTypes.STRING,
  orderPath: DataTypes.STRING,
  orderFileName: DataTypes.STRING,
  orderOriginalName: DataTypes.STRING,
  emissionDate: DataTypes.STRING,
  pdfFile: DataTypes.STRING,
  emitedTo: DataTypes.STRING,
  nNf: DataTypes.STRING,
  CTE: DataTypes.STRING,
  value: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cnpjId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  buyerId: DataTypes.INTEGER,
  providerId: DataTypes.INTEGER,
  orderStatusBuyer: DataTypes.STRING,
  orderStatusProvider: DataTypes.STRING,
  deliveryReceipt: DataTypes.STRING,
  cargoPackingList: DataTypes.STRING,
  deliveryCtrc: DataTypes.STRING,
}, {
  timestamps: true,
  tableName: 'orders',
  modelName: 'Order',
  charset: 'latin1',
  sequelize,
});

Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });

Cnpj.hasMany(Order, { foreignKey: 'id', as: 'orders' });
User.hasMany(Order, { foreignKey: 'id', as: 'orders' });
Provider.hasMany(Order, { foreignKey: 'id', as: 'orders' });

export default Order;
