import to from "await-to-js";

// Store
import { create, update } from "./codigoQR.store";

const createCodigoQR = async (data: any) => {
  const [err, newCodigoQR] = await to(create(data));
  if (err) throw err;
  return newCodigoQR;
}

const codigoQRItem = async (data: any, codigoQRId: string) => {
  const [err, codigoQRUpdated] = await to(update(data, codigoQRId));
  if (err) throw err;
  return codigoQRUpdated;
}

export {
  createCodigoQR,
  codigoQRItem
}