import to from "await-to-js";

// Models
import { Notificacion } from "../../models/Notificacion";

const create = async (data: Notificacion) => {
  const { descripcion, mesa_id } = data;
  const [err, newitem] = await to(Notificacion.create({
    descripcion,
    mesa_id
  }));
  if (err) throw err;
  return newitem;
};

export {
  create
}