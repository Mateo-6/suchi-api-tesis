import to from "await-to-js";

// Store
import { create, update } from "./orden.store";

const createOrden = async (data: any) => {
  const [err, newOrden] = await to(create(data));
  if (err) throw err;
  return newOrden;
}

const updateOrden = async (data: any, itemId: string) => {
  const [err, ordenUpdated] = await to(update(data, itemId));
  if (err) throw err;
  return ordenUpdated;
}

export {
  createOrden,
  updateOrden
}