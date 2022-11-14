"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOrden = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// models
const Orden_1 = require("./Orden");
const Item_1 = require("./Item");
class ItemOrden extends sequelize_1.Model {
}
exports.ItemOrden = ItemOrden;
ItemOrden.init({
    id: {
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
    }
}, {
    createdAt: 'data_created',
    modelName: 'item_Orden',
    sequelize: database_1.db,
    tableName: 'item_Orden',
    updatedAt: 'date_updated',
});
Orden_1.Orden.hasMany(ItemOrden, {
    foreignKey: 'orden_id',
    sourceKey: 'id',
});
ItemOrden.belongsTo(Orden_1.Orden, {
    foreignKey: 'orden_id',
    targetKey: 'id',
});
Item_1.Item.hasMany(ItemOrden, {
    foreignKey: 'item_id',
    sourceKey: 'id',
});
ItemOrden.belongsTo(Item_1.Item, {
    foreignKey: 'item_id',
    targetKey: 'id',
});
