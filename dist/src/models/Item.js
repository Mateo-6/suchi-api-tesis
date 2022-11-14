"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Restaurante_1 = require("./Restaurante");
class Item extends sequelize_1.Model {
}
exports.Item = Item;
Item.init({
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
    precio: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
    },
    descripcion: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING(200),
    },
}, {
    createdAt: 'data_created',
    modelName: 'item',
    sequelize: database_1.db,
    tableName: 'item',
    updatedAt: 'date_updated',
});
Restaurante_1.Restaurante.hasMany(Item, {
    foreignKey: 'restaurante_id',
    sourceKey: 'id',
});
Item.belongsTo(Restaurante_1.Restaurante, {
    foreignKey: 'restaurante_id',
    targetKey: 'id',
});
