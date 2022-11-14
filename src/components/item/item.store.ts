import to from "await-to-js";

// Models
import { Item } from "../../models/Item";

const create = async (data: Item) => {
  const { nombre, precio, descripcion, restaurante_id } = data;
  const [err, newitem] = await to(Item.create({
    nombre,
    precio,
    descripcion,
    restaurante_id,
  }));
  if (err) throw err;
  return newitem;
};

const update = async (data: Item, itemId: string) => {
  const { nombre, precio, descripcion } = data;

  const [errFinding, item] = await to(Item.findOne({
    where: {
      id: itemId
    }
  }));
  if (errFinding) throw errFinding;
  if (!item) throw "No se ha encontrado la item";

  const [errItemUpdated, itemUpdate] = await to(item.update({ nombre, precio, descripcion }));
  if (errItemUpdated) throw errItemUpdated;
  return itemUpdate;
};

export {
  create,
  update
}