import to from "await-to-js";

// Store
import { create, update } from "./item.store";

const createItem = async (data: any) => {
  const [err, newItem] = await to(create(data));
  if (err) throw err;
  return newItem;
}

const updateItem = async (data: any, itemId: string) => {
  const [err, itemUpdated] = await to(update(data, itemId));
  if (err) throw err;
  return itemUpdated;
}

export {
  createItem,
  updateItem
}