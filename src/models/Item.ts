import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Restaurante } from './Restaurante';

interface IItemAttributes {
  id?: string;
  nombre: string;
  precio: number;
  descripcion: string;
  restaurante_id?: string;
}

export class Item extends Model<IItemAttributes> {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  restaurante_id: string;
}

Item.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL(5, 2),
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING(200),
  },
},
  {
    createdAt: 'data_created',
    modelName: 'item',
    sequelize: db,
    tableName: 'item',
    updatedAt: 'date_updated',
  });

Restaurante.hasMany(Item, {
  foreignKey: 'restaurante_id',
  sourceKey: 'id',
});

Item.belongsTo(Restaurante, {
  foreignKey: 'restaurante_id',
  targetKey: 'id',
});