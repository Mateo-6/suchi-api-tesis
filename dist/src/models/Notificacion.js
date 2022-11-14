"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacion = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// Mesa
const Mesa_1 = require("./Mesa");
class Notificacion extends sequelize_1.Model {
}
exports.Notificacion = Notificacion;
Notificacion.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    descripcion: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING(200),
    },
}, {
    createdAt: 'data_created',
    modelName: 'notificacion',
    sequelize: database_1.db,
    tableName: 'notificacion',
    updatedAt: 'date_updated',
});
Mesa_1.Mesa.hasMany(Notificacion, {
    foreignKey: 'mesa_id',
    sourceKey: 'id',
});
Notificacion.belongsTo(Mesa_1.Mesa, {
    foreignKey: 'mesa_id',
    targetKey: 'id',
});
