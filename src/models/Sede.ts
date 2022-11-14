import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Restaurante } from './Restaurante';

interface ISedeAttributes {
  id?: string;
  descripcion: string;
  direccion: string;
  telefeno: string;
  correo: string;
  restaurante_id?: string,
}

export class Sede extends Model<ISedeAttributes> {
  id: string;
  descripcion: string;
  direccion: string;
  telefeno: string;
  correo: string;
  restaurante_id: string;
}

Sede.init({
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
  direccion: {
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  telefeno: {
    allowNull: false,
    type: DataTypes.CHAR(20),
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING(45),
  },
},
  {
    createdAt: 'data_created',
    modelName: 'sede',
    sequelize: db,
    tableName: 'sede',
    updatedAt: 'date_updated',
  });

Restaurante.hasMany(Sede, {
  foreignKey: 'restaurante_id',
  sourceKey: 'id',
});

Sede.belongsTo(Restaurante, {
  foreignKey: 'restaurante_id',
  targetKey: 'id',
});
