import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Persona } from './Persona';

interface IUsuarioAttributes {
  id?: string;
  usuario: string;
  contrasena: string;
  sesion: string;
  token: string;
}

export class Usuario extends Model<IUsuarioAttributes> {
  id: string;
  usuario: string;
  contrasena: string;
  sesion: string;
  token: string;
  persona: any;
}

Usuario.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  usuario: {
    allowNull: false,
    type: DataTypes.STRING(10),
  },
  contrasena: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  sesion: {
    allowNull: false,
    type: DataTypes.ENUM('on', 'off'),
  },
  token: {
    allowNull: true,
    type: DataTypes.STRING(200),
  }
},
  {
    createdAt: 'data_created',
    modelName: 'usuario',
    sequelize: db,
    tableName: 'usuario',
    updatedAt: 'date_updated',
  });

Persona.hasOne(Usuario, {
  foreignKey: 'persona_id',
  sourceKey: 'id',
});

Usuario.belongsTo(Persona, { 
  foreignKey: 'persona_id',
  targetKey: 'id',
});
