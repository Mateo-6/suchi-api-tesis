import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Persona } from './Persona';

interface IRestauranteAttributes {
  id?: string;
  nombre: string;
  nit: string;
}

export class Restaurante extends Model<IRestauranteAttributes> {
  id: string;
  nombre: string;
  nit: string;
}

Restaurante.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  nit: {
    allowNull: false,
    type: DataTypes.STRING(10),
  }
},
  {
    createdAt: 'data_created',
    modelName: 'restaurante',
    sequelize: db,
    tableName: 'restaurante',
    updatedAt: 'date_updated',
  });

Persona.hasOne(Restaurante, {
  foreignKey: 'persona_id',
  sourceKey: 'id',
});

Restaurante.belongsTo(Persona, {
  foreignKey: 'persona_id',
  targetKey: 'id',
});