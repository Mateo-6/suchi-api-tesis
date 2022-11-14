"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigoQR = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// Models
const Sede_1 = require("./Sede");
const Mesa_1 = require("./Mesa");
const Restaurante_1 = require("./Restaurante");
class CodigoQR extends sequelize_1.Model {
}
exports.CodigoQR = CodigoQR;
CodigoQR.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    },
    url: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(200),
    },
}, {
    createdAt: 'data_created',
    modelName: 'codigoQR',
    sequelize: database_1.db,
    tableName: 'CodigoQR',
    updatedAt: 'data_updated',
});
Sede_1.Sede.hasMany(CodigoQR, {
    foreignKey: 'sede_id',
    sourceKey: 'id',
});
CodigoQR.belongsTo(Sede_1.Sede, {
    foreignKey: 'sede_id',
    targetKey: 'id',
});
Mesa_1.Mesa.hasMany(CodigoQR, {
    foreignKey: 'mesa_id',
    sourceKey: 'id',
});
CodigoQR.belongsTo(Mesa_1.Mesa, {
    foreignKey: 'mesa_id',
    targetKey: 'id',
});
Restaurante_1.Restaurante.hasMany(CodigoQR, {
    foreignKey: 'restaurante_id',
    sourceKey: 'id',
});
CodigoQR.belongsTo(Restaurante_1.Restaurante, {
    foreignKey: 'restaurante_id',
    targetKey: 'id',
});
