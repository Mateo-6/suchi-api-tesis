import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Restaurante } from './Restaurante';
import { Mesa } from './Mesa';

interface IOrdenAttributes {
  id?: string;
  total: number;
  descripcion: string;
  restaurante_id?: string;
  mesa_id?: string;
}

export class Orden extends Model<IOrdenAttributes> {
  id: string;
  total: number;
  descripcion: string;
  restaurante_id: string;
  mesa_id: string;
}

Orden.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  total: {
    allowNull: false,
    type: DataTypes.DECIMAL(6, 2),
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING(200),
  },
},
  {
    createdAt: 'data_created',
    modelName: 'orden',
    sequelize: db,
    tableName: 'orden',
    updatedAt: 'date_updated',
  });

Restaurante.hasMany(Orden, {
  foreignKey: 'restaurante_id',
  sourceKey: 'id',
});

Orden.belongsTo(Restaurante, {
  foreignKey: 'restaurante_id',
  targetKey: 'id',
});

Mesa.hasMany(Orden, {
  foreignKey: 'restaurante_id',
  sourceKey: 'id',
});

Orden.belongsTo(Mesa, {
  foreignKey: 'mesa_id',
  targetKey: 'id',
});

