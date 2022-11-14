import to from "await-to-js";

// Store
import { create, update } from "./mesa.store";

const createMesa = async (data: any) => {
  const [err, newMesa] = await to(create(data));
  if (err) throw err;
  return newMesa;
}

const updateMesa = async (data: any, sedeId: string) => {
  const [err, mesaUpdated] = await to(update(data, sedeId));
  if (err) throw err;
  return mesaUpdated;
}

export {
  createMesa,
  updateMesa
}