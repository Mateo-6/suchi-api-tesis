"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sede = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Restaurante_1 = require("./Restaurante");
class Sede extends sequelize_1.Model {
}
exports.Sede = Sede;
Sede.init({
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
    direccion: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(20),
    },
    telefeno: {
        allowNull: false,
        type: sequelize_1.DataTypes.CHAR(20),
    },
    correo: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(45),
    },
}, {
    createdAt: 'data_created',
    modelName: 'sede',
    sequelize: database_1.db,
    tableName: 'sede',
    updatedAt: 'date_updated',
});
Restaurante_1.Restaurante.hasMany(Sede, {
    foreignKey: 'restaurante_id',
    sourceKey: 'id',
});
Sede.belongsTo(Restaurante_1.Restaurante, {
    foreignKey: 'restaurante_id',
    targetKey: 'id',
});
