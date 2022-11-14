import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Sede } from './Sede';

interface IMesaAttributes {
  id?: string;
  cantidad_sillas: string;
  descripcion: string;
  sede_id?: string;
}

export class Mesa extends Model<IMesaAttributes> {
  id: string;
  cantidad_sillas: string;
  descripcion: string;
  sede_id: string;
}

Mesa.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  cantidad_sillas: {
    allowNull: false,
    type: DataTypes.BIGINT(),
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING(200),
  },
},
  {
    createdAt: 'data_created',
    modelName: 'mesa',
    sequelize: db,
    tableName: 'mesa',
    updatedAt: 'date_updated',
  });

Sede.hasMany(Mesa, {
  foreignKey: 'sede_id',
  sourceKey: 'id',
});

Mesa.belongsTo(Sede, {
  foreignKey: 'sede_id',
  targetKey: 'id',
});
