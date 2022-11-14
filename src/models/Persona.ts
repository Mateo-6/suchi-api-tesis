import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

interface IPersonaAttributes {
  id?: string
  nombre: string
  apellido: string
  documento: string
  telefono: string
  email: string
}

export class Persona extends Model {
  id: string
  nombre: string
  apellido: string
  documento: string
  telefono: string
  email: string
}

Persona.init({
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
  apellido: {
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  documento: {
    allowNull: false,
    type: DataTypes.STRING(15),
  },
  telefono: {
    allowNull: false,
    type: DataTypes.STRING(10),
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(40),
  }
},
  {
    createdAt: 'data_created',
    modelName: 'persona',
    sequelize: db,
    tableName: 'persona',
    updatedAt: 'date_updated',
  });
