"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orden = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Restaurante_1 = require("./Restaurante");
class Orden extends sequelize_1.Model {
}
exports.Orden = Orden;
Orden.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    total: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL(6, 2),
    },
    descripcion: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING(200),
    },
}, {
    createdAt: 'data_created',
    modelName: 'orden',
    sequelize: database_1.db,
    tableName: 'orden',
    updatedAt: 'date_updated',
});
Restaurante_1.Restaurante.hasMany(Orden, {
    foreignKey: 'restaurante_id',
    sourceKey: 'id',
});
Orden.belongsTo(Restaurante_1.Restaurante, {
    foreignKey: 'restaurante_id',
    targetKey: 'id',
});
