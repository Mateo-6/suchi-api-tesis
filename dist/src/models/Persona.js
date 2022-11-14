"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
class Persona extends sequelize_1.Model {
}
exports.Persona = Persona;
Persona.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    nombre: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(30),
    },
    apellido: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(30),
    },
    documento: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(15),
    },
    telefono: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(10),
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(40),
    }
}, {
    createdAt: 'data_created',
    modelName: 'persona',
    sequelize: database_1.db,
    tableName: 'persona',
    updatedAt: 'date_updated',
});
