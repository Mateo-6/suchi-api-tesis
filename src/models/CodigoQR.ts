import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// Models
import { Sede } from './Sede';
import { Mesa } from './Mesa';
import { Restaurante } from './Restaurante';

interface ICodigoQRAttributes {
  id?: string;
  url: string;
  mesa_id?: string;
  restaurante_id?: string;
  sede_id?: string;
}

export class CodigoQR extends Model<ICodigoQRAttributes> {
  id: string;
  url: string;
  mesa_id: string;
  restaurante_id: string;
  sede_id: string;
}

CodigoQR.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  url: {
    allowNull: false,
    type: DataTypes.STRING(200),
  },
},
  {
    createdAt: 'data_created',
    modelName: 'codigoQR',
    sequelize: db,
    tableName: 'CodigoQR',
    updatedAt: 'data_updated',
  });

Sede.hasMany(CodigoQR, {
  foreignKey: 'sede_id',
  sourceKey: 'id',
});

CodigoQR.belongsTo(Sede, {
  foreignKey: 'sede_id',
  targetKey: 'id',
});

Mesa.hasMany(CodigoQR, {
  foreignKey: 'mesa_id',
  sourceKey: 'id',
});

CodigoQR.belongsTo(Mesa, {
  foreignKey: 'mesa_id',
  targetKey: 'id',
});

Restaurante.hasMany(CodigoQR, {
  foreignKey: 'restaurante_id',
  sourceKey: 'id',
});

CodigoQR.belongsTo(Restaurante, {
  foreignKey: 'restaurante_id',
  targetKey: 'id',
});
