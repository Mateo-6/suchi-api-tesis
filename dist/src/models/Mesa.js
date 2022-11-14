"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mesa = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Sede_1 = require("./Sede");
class Mesa extends sequelize_1.Model {
}
exports.Mesa = Mesa;
Mesa.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    cantidad_sillas: {
        allowNull: false,
        type: sequelize_1.DataTypes.BIGINT(),
    },
    descripcion: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING(200),
    },
}, {
    createdAt: 'data_created',
    modelName: 'mesa',
    sequelize: database_1.db,
    tableName: 'mesa',
    updatedAt: 'date_updated',
});
Sede_1.Sede.hasMany(Mesa, {
    foreignKey: 'sede_id',
    sourceKey: 'id',
});
Mesa.belongsTo(Sede_1.Sede, {
    foreignKey: 'sede_id',
    targetKey: 'id',
});
