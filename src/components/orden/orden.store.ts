import to from "await-to-js";

// Models
import { Orden } from "../../models/Orden";

const create = async (data: Orden) => {
  const { total, descripcion, restaurante_id, mesa_id  } = data;
  const [err, newitem] = await to(Orden.create({
    total,
    descripcion,
    restaurante_id,
    mesa_id,
  }));
  if (err) throw err;
  return newitem;
};

const update = async (data: Orden, itemId: string) => {
  const { total, descripcion } = data;

  const [errFinding, orden] = await to(Orden.findOne({
    where: {
      id: itemId
    }
  }));
  if (errFinding) throw errFinding;
  if (!orden) throw "No se ha encontrado la Orden";

  const [errOrdenUpdated, ordenUpdate] = await to(orden.update({ total, descripcion }));
  if (errOrdenUpdated) throw errOrdenUpdated;
  return ordenUpdate;
};

export {
  create,
  update
}