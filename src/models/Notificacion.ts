import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// Mesa
import { Mesa } from './Mesa';

interface INotificacionAttributes {
  id?: string;
  descripcion: string;
  mesa_id?: string;
}

export class Notificacion extends Model<INotificacionAttributes> {
  id: string;
  descripcion: string;
  mesa_id: string;
}

Notificacion.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING(200),
  },
},
  {
    createdAt: 'data_created',
    modelName: 'notificacion',
    sequelize: db,
    tableName: 'notificacion',
    updatedAt: 'date_updated',
  });

Mesa.hasMany(Notificacion, {
  foreignKey: 'mesa_id',
  sourceKey: 'id',
});

Notificacion.belongsTo(Mesa, {
  foreignKey: 'mesa_id',
  targetKey: 'id',
});
