"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Persona_1 = require("./Persona");
class Usuario extends sequelize_1.Model {
}
exports.Usuario = Usuario;
Usuario.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    usuario: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(10),
    },
    contrasena: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(45),
    },
    sesion: {
        allowNull: false,
        type: sequelize_1.DataTypes.ENUM('on', 'off'),
    },
    token: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING(200),
    }
}, {
    createdAt: 'data_created',
    modelName: 'usuario',
    sequelize: database_1.db,
    tableName: 'usuario',
    updatedAt: 'date_updated',
});
Persona_1.Persona.hasOne(Usuario, {
    foreignKey: 'persona_id',
    sourceKey: 'id',
});
Usuario.belongsTo(Persona_1.Persona, {
    foreignKey: 'persona_id',
    targetKey: 'id',
});
