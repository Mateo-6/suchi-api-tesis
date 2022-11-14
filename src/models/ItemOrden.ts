import { DataTypes, Model, Sequelize } from 'sequelize';
import { db } from '../database/database';

// models
import { Orden } from './Orden'
import { Item } from './Item'

interface IItemOrdenAttributes {
  id?: string;
  orden_id?: string;
  item_id?: string;
}

export class ItemOrden extends Model<IItemOrdenAttributes> {
  id: string;
  orden_id: string;
  item_id: string;
}

ItemOrden.init({
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
  }
},
  {
    createdAt: 'data_created',
    modelName: 'item_Orden',
    sequelize: db,
    tableName: 'item_Orden',
    updatedAt: 'date_updated',
  });

Orden.hasMany(ItemOrden, {
  foreignKey: 'orden_id',
  sourceKey: 'id',
});

ItemOrden.belongsTo(Orden, {
  foreignKey: 'orden_id',
  targetKey: 'id',
});

Item.hasMany(ItemOrden, {
  foreignKey: 'item_id',
  sourceKey: 'id',
});

ItemOrden.belongsTo(Item, {
  foreignKey: 'item_id',
  targetKey: 'id',
});
