"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurante = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Persona_1 = require("./Persona");
class Restaurante extends sequelize_1.Model {
}
exports.Restaurante = Restaurante;
Restaurante.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    nombre: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(20),
    },
    nit: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(10),
    }
}, {
    createdAt: 'data_created',
    modelName: 'restaurante',
    sequelize: database_1.db,
    tableName: 'restaurante',
    updatedAt: 'date_updated',
});
Persona_1.Persona.hasMany(Restaurante, {
    foreignKey: 'persona_id',
    sourceKey: 'id',
});
Restaurante.belongsTo(Persona_1.Persona, {
    foreignKey: 'persona_id',
    targetKey: 'id',
});
