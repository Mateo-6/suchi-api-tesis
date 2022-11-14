import to from "await-to-js";

// Store
import { create,  } from "./notificacion.store";

const createNotificacion = async (data: any) => {
  const [err, newNotificacion] = await to(create(data));
  if (err) throw err;
  return newNotificacion;
}

export {
  createNotificacion
}