import to from "await-to-js";

// Store
import { create, update } from "./sede.store";

const createSede = async (data: any) => {
  const [err, newSede] = await to(create(data));
  if (err) throw err;
  return newSede;
}

const updateSede = async (data: any, sedeId: string) => {
  const [err, sedeUpdated] = await to(update(data, sedeId));
  if (err) throw err;
  return sedeUpdated;
}

export {
  createSede,
  updateSede
}