import to from "await-to-js";

// Models
import { Mesa } from "../../models/Mesa";

const create = async (data: Mesa) => {
  const { descripcion, cantidad_sillas, sede_id } = data;
  const [err, newMesa] = await to(Mesa.create({
    descripcion,
    cantidad_sillas,
    sede_id,
  }));
  if (err) throw err;
  return newMesa;
};

const update = async (data: Mesa, mesaId: string) => {
  const { descripcion, cantidad_sillas } = data;

  const [errFinding, mesa] = await to(Mesa.findOne({
    where: {
      id: mesaId
    }
  }));
  if (errFinding) throw errFinding;
  if (!mesa) throw "No se ha encontrado la mesa";

  const [errMesaUpdated, mesaUpdate] = await to(mesa.update({ descripcion, cantidad_sillas }));
  if (errMesaUpdated) throw errMesaUpdated;
  return mesaUpdate;
};

export {
  create,
  update
}